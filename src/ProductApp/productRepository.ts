import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';
import { IProduct } from './productService';

async function getAllProducts(){
    try{
        let products = await client.product.findMany({
        
        })
        return products
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
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
        data: {
            name: data.name,
            src: data.src,
            price: Number(data.price),
            description: data.description,
            categoryId: Number(data.categoryId)
        }
    })
    return product
}  

const productRepository = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    createProduct: createProduct
}
export default productRepository
