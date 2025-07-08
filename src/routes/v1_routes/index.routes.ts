import express from 'express';
import usersV1Router from './users.routes';
import productsV1Router from './products.routes';

const v1Router = express.Router();


v1Router.use('/users', usersV1Router );
v1Router.use('/products', productsV1Router);

export default v1Router;