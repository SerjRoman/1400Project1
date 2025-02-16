import client from '../client/prismaClient'
import { Prisma } from '@prisma/client'
import { errors, IErrors } from '../config/errorCodes'

// Создание одной Category
async function createCategory(data: Prisma.CategoryCreateInput) {
    try{
        const category = await client.category.create({
            data: data
        })
        return category
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code in Object.keys(errors)){
                const errorKey: keyof IErrors = err.code;
                console.log(errorKey);
                throw err;
            }
        }
    }
}

// Получение всех Category
async function getAllCategories() {
    try{
        const categories = await client.category.findMany({})
        return categories
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code in Object.keys(errors)){
                const errorKey: keyof IErrors = err.code;
                console.log(errorKey);
                throw err;
            }
        }
    }
}
// Получение Category по айди
async function getCategoryById(id: number) {
    try{
        let category = await client.category.findUnique({
            where: {
                id: id
            }
        })
        return category
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code in Object.keys(errors)){
                const errorKey: keyof IErrors = err.code;
                console.log(errorKey);
                throw err;
            }
        }
    }
}

async function findCategoryByName(name: string) {
    try {
        const category = await client.category.findUnique({
            where: {
                name: name
            }
        })
        return category
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code in Object.keys(errors)){
                const errorKey: keyof IErrors = err.code;
                console.log(errorKey);
                throw err;
            }
        }
    }
}

async function findProductByCategory(name: string){
    try{
        const category = await client.category.findUnique({
            where: {
                name: name
            },
            include: { Products: true }
        })
        return category
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code in Object.keys(errors)){
                const errorKey: keyof IErrors = err.code;
                console.log(errorKey);
                throw err;
            }
        }
    }
}


const categoryRepository = {
    createCategory: createCategory,
    findCategoryByName: findCategoryByName,
    getCategoryById: getCategoryById,
    findProductByCategory: findProductByCategory,
    getAllCategories: getAllCategories
}
export default categoryRepository