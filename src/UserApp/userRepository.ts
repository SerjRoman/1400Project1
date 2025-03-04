import { Prisma } from "@prisma/client";
import client from "../client/prismaClient";
import { createUserT } from './types';
import { errors, IErrors } from "../config/errorCodes";

import { IErrors, errors } from "../config/errorCodes"
import { IError } from "../types/types"
import { User, CreateUser } from "./types"

async function findUserByEmail(email: string){
    try {
        let user = await client.user.findUnique({
            where: {
                email: email
            }
        })
        return user;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}
<<<<<<< HEAD

async function createUser(data: createUserT){
=======
// (●'◡'●)
async function createUser(data: CreateUser){
>>>>>>> main
    try{
        const user = await client.user.create({
            data: data
        })
        return user;
<<<<<<< HEAD
    }catch(error){
=======
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
    // ☆*: .｡. o(≧▽≦)o .｡.:*☆
}
// :O(
// (❁´◡`❁)
// ＼(((￣(￣(￣▽￣)￣)￣)))／


async function getUserById(id: number){
    try {
        let user = await client.user.findUnique({
            where: {
                id: id
            },
            select:{
                id: true,
                email: true,
                username: true,
                role: true
            }
        })
        return user;
    } catch(error){
>>>>>>> main
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}
const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
    getUserById: getUserById
}

export default userRepository;