import { Prisma } from "@prisma/client"

export type Product = Prisma.ProductGetPayload<{}>

export type Category = Prisma.CategoryGetPayload<{}>

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
    include: {
        Products: true
    }
}>
