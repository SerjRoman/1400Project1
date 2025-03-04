import { Prisma } from "@prisma/client";

export type User = Prisma.UserGetPayload<{
    select: {
        id: true,
        username: true,
        email: true,
        role: true
    }
}>

<<<<<<< HEAD
export type createUserT = Prisma.UserCreateInput
=======
export type CreateUser = Prisma.UserCreateInput
>>>>>>> main
