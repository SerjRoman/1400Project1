<<<<<<< HEAD
import { Prisma } from "@prisma/client"

export type Product = Prisma.ProductGetPayload<{}>

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
=======
import { Prisma } from "@prisma/client";

export type Product = Prisma.ProductGetPayload<{}>

export type CreateProduct = Prisma.ProductUncheckedCreateInput

>>>>>>> main
