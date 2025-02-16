import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';
import { errors, IErrors } from '../config/errorCodes';
import { CreateProduct } from './productTypes';


async function getAllProducts(){
    try{
        let products = await client.product.findMany({})
        return products
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

async function getProductById(id: number){
    try{
        let product = await client.product.findUnique({
            where:{
                id: id
            }
        })
        return product
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

async function createProduct(data: CreateProduct){
    try{
        let product = await client.product.create({
            data: data
        })
        return product
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

const productRepository = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    createProduct: createProduct
}
export default productRepository
