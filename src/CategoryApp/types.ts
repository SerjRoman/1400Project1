import { Prisma } from "@prisma/client";

export type Category = Prisma.CategoryGetPayload<{}>

export type createCategoryT = Prisma.CategoryCreateInput

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
    include: {
        Products: true
    }
}>

