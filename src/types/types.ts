import { Prisma } from "@prisma/client";

export interface IError {
    status: 'error';
    message: string;
}

export interface ISuccess<T> {
    status: 'success';
    data: T
}

export type Product = Prisma.ProductGetPayload<{}>

export type Category = Prisma.CategoryGetPayload<{}>

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
    include: {
        Products: true
    }
}>

export type User = Prisma.UserGetPayload<{}>
