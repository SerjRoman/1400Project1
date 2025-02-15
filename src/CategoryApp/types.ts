import { Prisma } from "@prisma/client";

export type Category = Prisma.CategoryGetPayload<{}>

export type createCategoryG = Prisma.CategoryCreateInput

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
    include: {
        Products: true
    }
}>