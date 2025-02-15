<<<<<<< HEAD
import { Prisma } from "@prisma/client"

export type Product = Prisma.ProductGetPayload<{}>
=======
import { Prisma } from "@prisma/client";
>>>>>>> main

export type Category = Prisma.CategoryGetPayload<{}>

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
    include: {
        Products: true
    }
}>

<<<<<<< HEAD
export interface ICategoryError{
    status: 'error',
    message: string
}

export interface ICategoriesSuccess{
    status: 'success',
    data: Category[]
}

export interface ICategorySuccess{
    status: 'success',
    data: Category
}
export interface ICategoryWithProductsSuccess{
    status: 'success',
    data: CategoryWithProducts
}
=======
>>>>>>> main
