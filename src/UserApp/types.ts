import { Prisma } from "@prisma/client";

export type User = Prisma.UserGetPayload<{
    select: {
        username: true,
        email: true,
        role: true,
        image: true
    }
}>

export type CreateUser = Prisma.UserCreateInput