import { Prisma } from "@prisma/client";
import userRepository from "./userRepository";

import { IUserError, IUserSuccess } from "./types";

async function authUser(email: string, password: string): Promise< IUserError | IUserSuccess > {
    let user = await userRepository.findUserByEmail(email);
    if (!user){
        return {status: 'error', message: 'user not found'};
    }
    
    if (user.password != password){
        return {status: 'error', message: 'nepravilniy password'};
    }

    return {status: 'success', data: user};
}   

async function registerUser(data: Prisma.UserCreateInput): Promise< IUserError | IUserSuccess > {
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