import { Router } from "express";
import {logger1, logger2} from '../controller/users.controller';
import {logger3, logger4} from '../controller/users.controller';

const userRouter = Router();

userRouter.get('/:id',logger1, logger2 );

userRouter.post('/:name', logger3, logger4);

export default userRouter;