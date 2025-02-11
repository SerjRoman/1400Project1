import { Prisma } from "@prisma/client";

export type Product = Prisma.ProductGetPayload<{}>

// ProductApp
export interface IProductError{
    status: 'error',
    message: string
}

export interface IProductsSuccess{
    status: 'success',
    data: Product[]
}

export interface IProductSuccess{
    status: 'success',
    data: Product
}




// CategoryApp
export type Category = Prisma.CategoryGetPayload<{}>

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
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




// UserApp
export type User = Prisma.UserGetPayload<{}>

export interface IUserError{
    status: 'error',
    message: string
}

export interface IUserSuccess{
    status: 'success',
    data: User
}