import { Request, Response } from 'express'
import userService from './userService'


async function authUser(req: Request, res: Response){

    const data = req.body
    const result = await userService.authUser(data.email, data.password)
    
    res.json(result)
}

async function registerUser(req: Request, res: Response){
    const data = req.body
    const result = await userService.registerUser(data)

    res.json(result)

}

async function getUserById(req: Request, res: Response){
    const id = res.locals.userId
    // console.log("id:",id)
    const result = await userService.getUserById(id)

    res.json(result)
    
}



const userControllerApi = {

    authUser: authUser,
    registerUser: registerUser,
    getUserById: getUserById
}

export default userControllerApi