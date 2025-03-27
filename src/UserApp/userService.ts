import { Prisma } from "@prisma/client";
import userRepository from "./userRepository";
import { IError, ISuccess } from '../types/types'
import { User } from "./types";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";
import { compare, hash } from "bcryptjs"

async function authUser(email: string, password: string): Promise< IError | ISuccess<string> > {
    let user = await userRepository.findUserByEmail(email);
    
    if (!user){
        return {status: 'error', message: 'user not found'};
    }

    const isMatch = await compare(password, user.password)

    if (!isMatch){
        return {status: 'error', message: 'nepravilniy password'};
    }

    const token = sign({id: user.id}, SECRET_KEY, {expiresIn: '1d'})

    return {status: 'success', data: token};
}



async function registerUser(data: Prisma.UserCreateInput): Promise< IError | ISuccess<string> > {
    const user = await userRepository.findUserByEmail(data.email)
    
    if (user) {
        return {status: 'error', message: 'User exists yo'}
    }

    const hashedPassword = await hash(data.password, 10)

    const userData = {
        ...data,
        password: hashedPassword
    }
    const newUser = await userRepository.createUser(userData)
    if (!newUser) {
        return {status: 'error', message: 'create error yo'}
    }
    
    const token = sign({id: newUser.id}, SECRET_KEY, {expiresIn: '1d'})

    return {status: 'success', data: token}
}

async function getUserById(id: number): Promise <IError | ISuccess<User>>{

    const user = await userRepository.getUserById(id);

    if (!user) {
        return {status: 'error', message: "User is not found"}
    }

    return {status: 'success', data: user}
}

const userService = {
    authUser: authUser,
    registerUser: registerUser,
    getUserById: getUserById
}

export default userService;