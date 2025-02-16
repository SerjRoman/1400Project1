import { Prisma } from "@prisma/client";

export type Category = Prisma.CategoryGetPayload<{}>

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
    include: {
        Products: true
    }
}>

export type CreateCategory = Prisma.CategoryUncheckedCreateInput;