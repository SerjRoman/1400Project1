import { Request, Response, NextFunction } from 'express';

export function userRoleMiddleware(req: Request, res: Response, next: NextFunction){
    const userCookie = req.cookies.user
    if (userCookie) {
        
        
    }
    if (!userCookie){
        res.sendStatus(403)
    }
    const user = JSON.parse(userCookie) 
    if (user.role === 'admin') {
        next()
    }
    res.sendStatus(403)
}