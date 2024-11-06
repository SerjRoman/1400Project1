import express, { Express, Request, Response } from 'express'
import userService from './userService'
import { SECRET_KEY } from '../config/token'
import { sign } from 'jsonwebtoken'

function login(req: Request, res: Response){
    res.render('login')
}

async function authUser(req: Request, res: Response){
    // console.log(req.body)
    // // метод cookie отправляет специальный заголовок Set-Cookie
    // res.cookie('user', req.body.email)
    // res.sendStatus(200)

    const data = req.body
    const user = await userService.authUser(data.email, data.password)
    
    if (user == 'error'){
        res.send('error')
        return 
    }
    const token = sign(user, SECRET_KEY, {expiresIn: '1h'})
    res.cookie('token', token)
    res.sendStatus(200)
}


const userController = {
    login: login,
    authUser: authUser
}

export default userController