import userRepository from "./userRepository";
import { IError, ISuccess } from "../types/types";
import { CreateUser } from "./userTypes";

async function authUser(email: string, password: string): Promise< IError | ISuccess<User> > {
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



async function registerUser(data: CreateUser): Promise< IError | ISuccess<User> > {
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
// yo this is my new baggy jeans bruh child po

export default userService;