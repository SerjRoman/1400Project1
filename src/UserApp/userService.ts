import { Prisma } from "@prisma/client";
import userRepository from "./userRepository";

interface IUserError{
    status: 'error',
    message: string
}

interface IUserSuccess{
    status: 'success',
    data: IUser
}

interface IUser{
    id: number,
    username: string,
    email: string,
    password: string
}

async function authUser(email: string, password: string): Promise< IUserError | IUserSuccess > {
    let user = await userRepository.findUserByEmail(email);
    // if (user){
    //     if (password == user.password){
    //         return user;
    //     }else {}
    // }else {}
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
    const full_data = {
        ...data,
        role: 'user'
    }
    const yoUser = await userRepository.createUser(full_data)
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