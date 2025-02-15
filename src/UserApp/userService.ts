import { Prisma } from "@prisma/client";
import userRepository from "./userRepository";
import { IError, ISuccess } from '../types/types'
import { User } from "./types";

async function authUser(email: string, password: string): Promise< IError | ISuccess<User> > {
    let user = await userRepository.findUserByEmail(email);

    if (!user){
        return {status: 'error', message: 'user not found'};
    }
    
    if (user.password != password){
        return {status: 'error', message: 'nepravilniy password'};
    }

    return {status: 'success', data: user};
}   



async function registerUser(data: Prisma.UserCreateInput): Promise< IError | ISuccess<User> > {
    const user = await userRepository.findUserByEmail(data.email)
    
    if (user) {
        return {status: 'error', message: 'User exists yo'}
    }

const userData = {
    username: data.username,
    email: data.email,
    password: data.password,
    role: "user"
}

    const yoUser = await userRepository.createUser(userData)
    if (!yoUser) {
        return {status: 'error', message: 'create error yo'}
    } 
    return {status: 'success', data: yoUser}
}


const userService = {
    authUser: authUser,
    registerUser: registerUser
}
// yo this is my new baggy jeans bruh child po

export default userService;