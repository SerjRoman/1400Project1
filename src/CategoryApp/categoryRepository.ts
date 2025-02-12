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
    } catch(error){
        // throw error
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

// Получение всех Category
async function getAllCategories() {
    try{
        const categories = await client.category.findMany({})
        return categories
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
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
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function findCategoryByName(name: any) {
    try {
        const category = await client.category.findUnique({
            where: {
                name: name
            }
        })
        return category
    } catch(error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
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
    } catch(error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
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