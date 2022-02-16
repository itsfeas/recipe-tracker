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
const checkDish = controller((req: Request, res: Response) => {
    console.log('attempting to add dish', req.body.name);
    dishRepo.add(req.body.name, req.body.ingredients);
    res.status(200);
});

/**
 *  Adds a dish.
 *  @param req HTTP request.
 *  @param res HTTP response.
 *  @returns success message.
*/
const addDish = controller((req: Request, res: Response) => {
    console.log('attempting to add dish', req.body.name);
    dishRepo.add(req.body.name, req.body.ingredients);
    res.status(200);
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


/**
 *  Adds a dish to the dish repository
 *  @param name dish name
 *  @returns nothing
*/
const checkIngredients = controller(async (req: Request, res: Response) => {
    const ingredients = req.body.ingredients;
    const dishes = await dishRepo.getAll();
    const filteredDishes = Array();

    let numIngredients = 0;
    (ingredients as any).forEach(() => {
        numIngredients++;
    });

    console.log('ingredients', ingredients, typeof ingredients);
    dishes.forEach((dish) => {
        const ingredientsDish: any = dish.ingredients;
        const ingredientsList = ingredientsDish.ingredients;
        let numFound = 0;
        (ingredientsList as any).forEach((ingredientDish: any) => {
            if (ingredients.includes(ingredientDish)) {
                numFound++;
            }
            console.log('numFound', numFound, numIngredients)
            if (numFound === numIngredients) {
                filteredDishes.push(dish);
            }
        });
    });
    return res.status(200).json({
        dishes: filteredDishes
    });
});

export {
    addDish,
    removeDish,
    getAll,
    checkIngredients
}