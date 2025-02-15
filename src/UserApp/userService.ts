import { Prisma } from "@prisma/client";
import userRepository from "./userRepository";
<<<<<<< HEAD
import { IUserError, IUserSuccess, User } from "./types"


async function authUser(email: string, password: string): Promise< IUserError | IUserSuccess > {
=======
import { IError, ISuccess } from '../types/types'
import { User } from "./types";

async function authUser(email: string, password: string): Promise< IError | ISuccess<User> > {
>>>>>>> main
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
    const yoUser = await userRepository.createUser(data)
    if (!yoUser) {
        return {status: 'error', message: 'create error yo'}
    } 
    return {status: 'success', data: yoUser}
}


const userService = {
    authUser: authUser,
    registerUser: registerUser
}

export default userService;