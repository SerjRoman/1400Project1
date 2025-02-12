import express, { Express, Request, Response } from 'express'
import userService from './userService'
import { SECRET_KEY } from '../config/token'
import { sign } from 'jsonwebtoken'

function login(req: Request, res: Response){
    res.render('login')
}

function registration(req: Request, res: Response){
    res.render('registration')
}

async function authUser(req: Request, res: Response){
    const data = req.body
    const user = await userService.authUser(data.email, data.password)
    
    if (user.status == 'error') {
        res.send(`${user.status}, ${user.message}`)
        return
    }

    const token = sign(user.data, SECRET_KEY, {expiresIn: '1h'})
    res.cookie('token', token)
    res.sendStatus(200)
}

async function registerUser(req: Request, res: Response){
    const data = req.body
    const result = await userService.registerUser(data)
    if (result.status == 'error'){
        res.send(`${result.status}, ${result.message}`)
        return
    }
    const token = sign(result.data, SECRET_KEY, {expiresIn: '1h'})
    res.cookie('token', token)
    res.sendStatus(200)
}



const userController = {
    login: login,
    authUser: authUser,
    registration: registration,
    registerUser: registerUser,
}

export default userController