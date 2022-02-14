import express from 'express';
import * as controller from '../controllers/index';
import * as dishController from '../controllers/dishes';

const router = express.Router();
router.all('/', controller.home);
router.get('/search-dish', dishController.searchDish);


export default router;