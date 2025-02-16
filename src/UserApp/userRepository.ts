import { Prisma } from "@prisma/client";
import client from "../client/prismaClient";
import { CreateUser } from "./types";

async function findUserByEmail(email: string){
    try{
        let user = await client.user.findUnique({
            where: {
                email: email
            }
        })

        return user;
    } catch(error){
        console.log(error);
    }
}

async function createUser(data: CreateUser){
    try{
        const user = await client.user.create({
            data: data
        })
        return user;
    }catch(error){
        console.log(error);
    }
    //     ☆*: .｡. o(≧▽≦)o .｡.:*☆
}
const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
}

export default userRepository;