import { Prisma } from "@prisma/client";

export type User = Prisma.UserGetPayload<{
    select: {
        id: true,
        username: true,
        email: true,
        role: true
    }
}>

export type CreateUser = Prisma.UserCreateInput