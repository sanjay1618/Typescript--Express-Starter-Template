import express from 'express';
import usersV1Router from './users.routes';
const v1Router = express.Router();

v1Router.use('/users', usersV1Router );

export default v1Router;