import * as db from 'zapatos/db';
import { conditions as dc } from 'zapatos/db';
import type * as schema from 'zapatos/schema';
import connection from './util/connection';


/**
 *  Adds a dish to the dish repository
 *  @param name dish name
 *  @returns nothing
*/
const add = (name: string) => {
    const dish: schema.dishes.Insertable = {
        name: name
    };
    db.insert('dishes', dish).run(connection);
};


/**
 *  Removes an item from the inventory
 *  @param id the id of the item to remove
 *  @returns nothing
*/
const remove = (id: number) => {
    const dish: schema.dishes.Whereable = {
        dish_id: dc.eq(id)
    };
    db.deletes('dishes', dish).run(connection);
};


/**
 *  Edit a dish
 *  @param id the id of the dish to remove
 *  @returns nothing
*/
const edit = (id: number, name: string) => {
    const dish: schema.dishes.Whereable = {
        dish_id: dc.eq(id)
    };
    const update: schema.dishes.Updatable = {
        name: name
    };
    db.update('dishes', update, dish).run(connection);
};

/**
 *  Returns all dishes in the repository
 *  @returns Promise containing all dishes
*/
const getAll = () => {
    return db.select('dishes', {}).run(connection);
};

export {
    add,
    remove,
    edit,
    getAll
}