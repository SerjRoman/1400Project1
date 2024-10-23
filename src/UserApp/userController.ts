import express, { Express, Request, Response } from 'express'


function login(req: Request, res: Response){
    res.render('login')

}

function authUser(req: Request, res: Response){
    console.log(req.body)
    // метод cookie отправляет специальный заголовок Set-Cookie
    res.cookie('user', req.body.email)
    res.sendStatus(200)
}


const userController = {
    login: login,
    authUser: authUser
}

export default userController