import { Prisma } from "@prisma/client";
import client from "../client/prismaClient";


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

async function createUser(data: Prisma.UserCreateInput){
    try{
        const user = await client.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: data.password,
                role: 'user'
            }
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