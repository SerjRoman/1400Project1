import { Prisma } from "@prisma/client";
import client from "../client/prismaClient";

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
// (●'◡'●)
async function createUser(data: CreateUser){
    try{
        const user = await client.user.create({
            data: data
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
    // ☆*: .｡. o(≧▽≦)o .｡.:*☆
}
// :O(
// (❁´◡`❁)
// ＼(((￣(￣(￣▽￣)￣)￣)))／
const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
}

export default userRepository;