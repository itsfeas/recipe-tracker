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
    dishRepo.add(req.body);
    return "success";
});


/**
 *  Removes a dish.
 *  @param req HTTP request.
 *  @param res HTTP response.
 *  @returns success message.
*/
const removeDish = controller((req: Request, res: Response) => {
    dishRepo.remove(req.body.location);
    return res.status(200).json({
        item: req.body.location
    });
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