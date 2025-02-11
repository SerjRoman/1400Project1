import { Prisma } from "@prisma/client"

type Category = Prisma.CategoryGetPayload<{}>

type CategoryWithProducts = Prisma.CategoryGetPayload<{
    include: {
        Products: true
    }
}>

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