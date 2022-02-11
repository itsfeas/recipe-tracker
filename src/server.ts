import express, { Request, Response } from 'express';

import dishRoutes from './routes/dishRoutes';
import middleware from './controllers/util/middleware';
require('dotenv').config({ path: 'api.env' });

const router = express();
const port = process.env.API_PORT || "8000";


console.log(
    "DB ACCESS\n",
    "USER:", process.env.PGUSER, "\n",
    "HOST:", process.env.PGHOST, "\n",
    "DB_NAME:", process.env.PGDATABASE, "\n",
    "PORT:", process.env.PGPORT
);

/**
 *  App Configuration
 */
router.use(middleware.bodyParser());
router.use(middleware.consoleDisplay());
router.use(middleware.corsCall());
router.use(middleware.errorHandler());


/**
 * Routes Definitions
 */
router.use('/', (req:Request, res: Response) => {
    res.sendFile(__dirname + '/index.html')
});
router.use('/api/v1', dishRoutes);

/**
 * Server Activation
 */
router.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});