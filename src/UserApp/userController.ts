import { Request, Response } from 'express'
import userService from './userService'

function login(req: Request, res: Response){
    res.render('login')
}

function registration(req: Request, res: Response){
    res.render('registration')
}

async function authUser(req: Request, res: Response){
    const data = req.body
    const result = await userService.authUser(data.email, data.password)
    
    if (result.status == 'error'){
        res.send(result.message)
        return
    }


    res.cookie('token', result.data)
    res.sendStatus(200)
    res.send("Welcome")
}

async function registerUser(req: Request, res: Response){
    const data = req.body
    const result = await userService.registerUser(data)
    if (result.status == 'error'){
        res.send(result.message)
        return
    }
    
    res.send("Successfully registered")
}



const userController = {
    login: login,
    authUser: authUser,
    registration: registration,
    registerUser: registerUser,
}

export default userController