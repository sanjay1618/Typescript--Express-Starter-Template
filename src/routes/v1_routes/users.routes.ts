import { logger1, logger2, logger3, logger4 } from "../../controller/users.controller";
import express from 'express';
import { validateRequestBody } from "../../validators/index.validators";
import { UserSchema } from "../../validators/userSchema.validators";

const usersV1Router = express.Router();

usersV1Router.get('/', validateRequestBody(UserSchema), logger1, logger4);

export default usersV1Router;