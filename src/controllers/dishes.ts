import { Request, Response } from 'express';
import connection from '../repositories/util/connection';
import * as dishRepo from '../repositories/dishRepo';
import controller from './util/controllerUtil';


/**
 *  Adds a dish.
 *  @param req HTTP request.
 *  @param res HTTP response.
 *  @returns success message.
*/
const addDish = controller((req: Request, res: Response) => {
    console.log('attempting to add dish', req.body.name);
    dishRepo.add(req.body.name);
    res.status(200);
    res.redirect("/");
});


/**
 *  Removes a dish.
 *  @param req HTTP request.
 *  @param res HTTP response.
 *  @returns success message.
*/
const removeDish = controller(async (req: Request, res: Response) => {
    const dishId = req.body.id;
    const dishEntry = await dishRepo.get(dishId);
    if (dishEntry !== undefined) {
        dishRepo.remove(dishId);
        res.redirect("/");
        res.status(200);
    }
    else {
        console.log('dish does not exist!')
        res.status(400);
    }
});


/**
 *  Returns all dishes.
 *  @param req HTTP request.
 *  @param res HTTP response.
 *  @returns Array of all dishes.
*/
const getAll = controller(async (req: Request, res: Response) => {
    const dishes = await dishRepo.getAll();
    return res.status(200).json({
        dishes: dishes
    });
});



export {
    addDish,
    removeDish,
    getAll
}