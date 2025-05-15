import {Request, Response, NextFunction} from 'express';
export const logger1 = (req : Request, res:Response, next : NextFunction) => {
    const requestHeader = req.headers['content-type'];
    const requestParam = req.params.id;
    console.log(`The id of the request is ${requestParam} and the value of the requestHeader is ${requestHeader}`);
    next();
}

export const logger2 = (req: Request, res : Response, next : NextFunction) => {
    const responseObject = {
        'requestBody' : req.body,
        'requestParam' : req.params.id
    }
    console.log(responseObject);
    res.send(responseObject);
}