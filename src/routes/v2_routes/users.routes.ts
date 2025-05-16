import express from 'express';
import { logger1, logger2, logger3, logger4 } from '../../controller/users.controller';

const v2UsersRouter = express.Router();

v2UsersRouter.get('/', logger1, logger2);
v2UsersRouter.get('/names', logger3, logger4);

export default v2UsersRouter;
