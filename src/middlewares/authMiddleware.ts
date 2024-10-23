import {Request, Response, NextFunction} from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction){
    const cookies = req.cookies
    if (cookies.user){
        console.log("user authenticated ")
        next()
    } else {
        res.sendStatus(401)
    }
}

