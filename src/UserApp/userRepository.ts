import { Prisma } from "@prisma/client";
import client from "../client/prismaClient";
import { errors, IError } from "../config/errorCodes";


async function findUserByEmail(email: string){
    try{
        let user = await client.user.findUnique({
            where: {
                email: email
            }
        })
        return user;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (errors.filter((err) => err.errorCode == error.code)){
                const err: IError[] = errors.filter((err) => err.errorCode == error.code)
                console.log(err[0].message)
            }
        }
    }
}

async function createUser(data: Prisma.UserCreateInput){
    try{
        const user = await client.user.create({
            data: data
        })
        return user;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (errors.filter((err) => err.errorCode == error.code)){
                const err: IError[] = errors.filter((err) => err.errorCode == error.code)
                console.log(err[0].message)
            }
        }
    }
}
const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
}

export default userRepository;