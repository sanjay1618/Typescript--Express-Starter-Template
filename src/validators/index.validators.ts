import {z, AnyZodObject} from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validateRequestBody = (schema : AnyZodObject) => {
    return (req: Request, res: Response, next : NextFunction) => {
        const reqBody = schema.safeParse(req.body);

        if (reqBody.success) {
            console.log("Successfully validated the request body and it matches the schema");
            next();
        }
        else{
            res.status(400).json({
                message: "Invalid Body",
                error: reqBody.error
            });
        }
    }
}
