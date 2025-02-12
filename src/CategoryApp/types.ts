import { Prisma } from "@prisma/client";

type Product = Prisma.ProductGetPayload<{}>

type Category = Prisma.CategoryGetPayload<{}>

type CategoryWithProducts = Prisma.CategoryGetPayload<{
    include: {
        Products: true
    }
}>
// {id: number, name: string, Products: [{name: string, id: number}]}

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