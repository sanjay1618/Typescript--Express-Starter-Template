import {Request, Response} from 'express';

export const pingHandler = (req : Request, res : Response) => {
    res.send("Pong We have received the get request");
}