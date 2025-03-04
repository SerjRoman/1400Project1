import { Prisma } from "@prisma/client";
import userRepository from "./userRepository";
import { IError, ISuccess } from '../types/types'
<<<<<<< HEAD
import { createUserT, User } from "./types";
=======
import { User } from "./types";
import { sign } from "jsonwebtoken";
import { SECRET_KEY } from "../config/token";
import { compare, hash } from "bcryptjs"
>>>>>>> main

async function authUser(email: string, password: string): Promise< IError | ISuccess<string> > {
    let user = await userRepository.findUserByEmail(email);
<<<<<<< HEAD

=======
    // if (user){
    //     if (password == user.password){
    //         return user;
    //     }else {}
    // }else {}
    
>>>>>>> main
    if (!user){
        return {status: 'error', message: 'user not found'};
    }
    // $2y$10$gVXpISLWZlLnukdkRPHjr.F5Nin3CjnEHr4LFyF.3.rQimffVo2aq
    // $2y, $10, $gVXpISLWZlLnukdkRPHjr
    const isMatch = await compare(password, user.password)

    if (!isMatch){
        return {status: 'error', message: 'nepravilniy password'};
    }

    const token = sign({id: user.id}, SECRET_KEY, {expiresIn: '1d'})

    return {status: 'success', data: token};
}



<<<<<<< HEAD
async function registerUser(data: createUserT): Promise< IError | ISuccess<User> > {
=======
async function registerUser(data: Prisma.UserCreateInput): Promise< IError | ISuccess<string> > {
>>>>>>> main
    const user = await userRepository.findUserByEmail(data.email)
    
    if (user) {
        return {status: 'error', message: 'User exists yo'}
    }
<<<<<<< HEAD

const userData = {
    username: data.username,
    email: data.email,
    password: data.password,
    role: "user"
}

    const yoUser = await userRepository.createUser(userData)
    if (!yoUser) {
=======
    // $2y$10$gVXpISLWZlLnukdkRPHjr.F5Nin3CjnEHr4LFyF.3.rQimffVo2aq
    // $2y -> алгоритм хешрования 
    // $10 -> раунды - cost factor - число, указывающее сколько раз мы хотим хешировать пароль (>4 <31)
    // $gVXpISLWZlLnukdkRPHjr -> соль -> специальная строка, которая припысывается к каждому хешу делая его уникальным(соль всегда случайна)
    // F5Nin3CjnEHr4LFyF.3.rQimffVo2aq - хеш

    // 12345 -> DanielHash256 -> abcd
    // 12345 -> DanielHash256 -> abcd
    
    // hash(пароль, ЛИБО соль ЛИБО раунды)
    // genSalt(10 ) => salt -> "ghijefos;djbnsdkjl"

    const hashedPassword = await hash(data.password, 10)
    //data = {username: 'Daniel', email: "python@gmail.com", password: "12345", role: "user"}
    // data.password = hashedPassword R.I.P
    const userData = {
        ...data,
        password: hashedPassword
    }
    const newUser = await userRepository.createUser(userData)
    if (!newUser) {
>>>>>>> main
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
<<<<<<< HEAD
=======

// yo this is my new baggy jeans bruh kai angel 9mice
>>>>>>> main

export default userService;