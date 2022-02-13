import express from 'express';
import * as controller from '../controllers/index';

const router = express.Router();
router.all('/', controller.home);


export default router;