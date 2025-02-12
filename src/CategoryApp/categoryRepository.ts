import client from '../client/prismaClient';
import { Prisma } from '@prisma/client';
import { errors, IErrors } from '../config/errorCodes';
import { ICategory, ICreateCategory, ICategoryResponse } from './types';

// Создание одной Category
async function createCategory(data: ICreateCategory): Promise<ICategoryResponse> {
    try {
        const category = await client.category.create({
            data: data
        });
        return { status: 'success', data: category };
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code in Object.keys(errors)) {
                const errorKey: keyof IErrors = error.code;
                console.error(errors[errorKey]);
                return { status: 'error', message: errors[errorKey] };
            }
        }
        console.error('Error creating category:', error);
        return { status: 'error', message: 'Error creating category' };
    }
}

// Получение всех Category
async function getAllCategories(): Promise<ICategoryResponse> {
    try {
        const categories = await client.category.findMany({});
        return { status: 'success', data: categories };
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code in Object.keys(errors)) {
                const errorKey: keyof IErrors = error.code;
                console.error(errors[errorKey]);
                return { status: 'error', message: errors[errorKey] };
            }
        }
        console.error('Error fetching categories:', error);
        return { status: 'error', message: 'Error fetching categories' };
    }
}

// Получение Category по айди
async function getCategoryById(id: number): Promise<ICategoryResponse> {
    try {
        const category = await client.category.findUnique({
            where: {
                id: id
            }
        });
        if (!category) {
            return { status: 'error', message: 'Category not found' };
        }
        return { status: 'success', data: category };
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code in Object.keys(errors)) {
                const errorKey: keyof IErrors = error.code;
                console.error(errors[errorKey]);
                return { status: 'error', message: errors[errorKey] };
            }
        }
        console.error(`Error fetching category with id ${id}:`, error);
        return { status: 'error', message: `Error fetching category with id ${id}` };
    }
}

const categoryRepository = {
    createCategory,
    getAllCategories,
    getCategoryById
};

export default categoryRepository;
