import { Prisma } from "@prisma/client";

export type Category = Prisma.CategoryGetPayload<{}>

export type createCategoryType = Prisma.CategoryCreateInput

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
    include: {
        Products: true
    }
}>

