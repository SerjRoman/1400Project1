import productRepository from "./productRepository";
import { Prisma } from "@prisma/client";

import { IError, ISuccess, Product } from '../types/types'

async function getAllProducts(): Promise< IError | ISuccess<Product[]> >{
    const products = await productRepository.getAllProducts()
    if (!products){
        return {status: 'error', message: 'products not found'};
    }
    return {status: 'success', data: products};
}

async function getProductById(id: number): Promise< IError | ISuccess<Product> > {
    let product = await productRepository.getProductById(id)
    if (!product) {
        return {status: 'error', message: 'product not found'}
    }
    return {status: 'success', data: product}
    
}


async function createProduct(data: Prisma.ProductCreateInput): Promise< IError | ISuccess<Product> >{
    let product = await productRepository.createProduct(data);
    if (!product){
        return {status: "error", message: "product create error"}
    }
    return {status: "success", data: product}
}

const productService = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    createProduct: createProduct
} 

export default productService