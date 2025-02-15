import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';
import { errors, IErrors } from '../config/errorCodes'
import { CreateProduct } from './types';


async function getAllProducts(){
    try{
        let products = await client.product.findMany({
        
        })
        return products
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function getProductById(id: number){
    try{
        let product = await client.product.findUnique({
            where:{
                id: id
            }
        })
        return product
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
    

}

async function createProduct(data: CreateProduct){
    let product = await client.product.create({
        data: data
    })
    return product
}  

const productRepository = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    createProduct: createProduct
}
export default productRepository
