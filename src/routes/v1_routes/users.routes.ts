import { logger1, logger2, logger3, logger4 } from "../../controller/users.controller";
import express from 'express';

const usersV1Router = express.Router();

usersV1Router.get('/', logger1, logger2);

export default usersV1Router;