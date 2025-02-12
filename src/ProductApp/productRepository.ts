import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';
import { errors, IError } from '../config/errorCodes'


async function getAllProducts(){
    try{
        let products = await client.product.findMany({})
        return products
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (errors.filter((err) => err.errorCode == error.code)){
                const err: IError[] = errors.filter((err) => err.errorCode == error.code)
                console.log(err[0].message)
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
            if (errors.filter((err) => err.errorCode == error.code)){
                const err: IError[] = errors.filter((err) => err.errorCode == error.code)
                console.log(err[0].message)
            }
        }
    }
}

async function createProduct(data: Prisma.ProductCreateInput){
    try{
        let product = await client.product.create({
            data: data
        })
        return product
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (errors.filter((err) => err.errorCode == error.code)){
                const err: IError[] = errors.filter((err) => err.errorCode == error.code)
                console.log(err[0].message)
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
