import { Router } from "express";
import {logger1, logger2} from '../controller/users.controller';

const userRouter = Router();

userRouter.get('/:id',logger1, logger2 );

export default userRouter;