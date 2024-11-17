import client from '../client/prismaClient'
import { Prisma } from '@prisma/client'

// Создание одной Category
async function createCategory(data: Prisma.CategoryCreateInput) {
    console.log('repository',data)
    try{
        const category = await client.category.create({
            data: data
        })
        return category
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code == 'P2002'){
                console.log(error.message);
                throw error
            } else if (error.code === 'P2007') {
                console.log(error.message);
                throw error
            } else if (error.code === 'P2003') {
                console.log(error.message);
                throw error
            } else if (error.code === 'P2014') {
                console.log(error.message);
                throw error
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
            if (error.code == 'P2002'){
                console.log(error.message);
                throw error
            } else if (error.code === 'P2007') {
                console.log(error.message);
                throw error
            } else if (error.code === 'P2003') {
                console.log(error.message);
                throw error
            } else if (error.code === 'P2014') {
                console.log(error.message);
                throw error
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
            if (error.code == 'P2002'){
                console.log(error.message)
                throw error
            }
            if (error.code == 'P2003'){
                console.log(error.message)
                throw error
            }
            if (error.code == 'P2007'){
                console.log(error.message)
                throw error
            }
            if (error.code == 'P2014'){
                console.log(error.message)
                throw error
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
    } catch(error) {
        console.log(error)
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
        console.log(error)
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