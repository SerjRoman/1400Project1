
import { Prisma } from "@prisma/client";

type User = Prisma.UserGetPayload<{}>

export interface IUserError{
    status: 'error',
    message: string
}

export interface IUserSuccess{
    status: 'success',
    data: User
}