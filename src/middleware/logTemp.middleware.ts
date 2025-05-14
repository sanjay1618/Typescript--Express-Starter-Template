import {Request, Response, NextFunction} from 'express';

export const log1 = (req : Request, res : Response, next : NextFunction) => {
    console.log("Logged 1");
    next();
};

export const log2 = (req : Request, res : Response, next : NextFunction) =>{
    console.log("Logged 2");
    next();
};

export const log3 = (req: Request, res: Response) =>{
    console.log("Logged 3");
    res.send("Logged finally");

}