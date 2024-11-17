import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';
import { IProduct } from './productService';

async function getAllProducts(){
    try{
        let products = await client.product.findMany({
        
        })
        return products
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code == 'P2002'){
                console.log(error.message);
                throw error;
            }
        }
    }
}

async function getProductById(id: number){
    let product = await client.product.findUnique({
        where:{
            id: id
        }
    })
    return product

}

async function createProduct(data: IProduct){
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
