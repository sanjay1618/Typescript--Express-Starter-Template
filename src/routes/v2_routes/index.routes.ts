import express from 'express';
import v2UsersRouter from './users.routes';
const v2Router = express.Router();
v2Router.use('/users', v2UsersRouter);

export default v2Router;