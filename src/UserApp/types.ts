<<<<<<< HEAD
import { Prisma } from "@prisma/client"

export interface IUserError{
    status: 'error',
    message: string
}

export interface IUserSuccess{
    status: 'success',
    data: User
}

export type User = Prisma.UserGetPayload<{}>
=======
import { Prisma } from "@prisma/client";

export type User = Prisma.UserGetPayload<{}>

>>>>>>> main
