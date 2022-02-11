import express from 'express';
import * as controller from '../controllers/dishes';

const router = express.Router();
router.post('/dish', controller.addDish);
router.delete('/dish', controller.removeDish);
router.get('/dishes', controller.getAll);


export default router;