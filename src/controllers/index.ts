import { Request, Response } from 'express';
import * as dishRepo from '../repositories/dishRepo';
import controller from './util/controllerUtil';


/**
 *  Renders main page.
 *  @param req HTTP request.
 *  @param res HTTP response.
*/
const home = controller(async (req: Request, res: Response) => {
    const dishes = await dishRepo.getAll();
    res.render('index.ejs', {
        dishes: dishes
    })
});


export {
    home
}