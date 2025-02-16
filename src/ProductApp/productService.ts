import productRepository from "./productRepository";
import { Prisma } from "@prisma/client";
import { CreateProduct, Product } from "./types";
import { IError, ISuccess } from '../types/types'

async function getAllProducts(): Promise< ISuccess<Product[]> | IError >{
    
    const products = await productRepository.getAllProducts()

    if (!products){
        return {status: 'error', message: 'products not found'};
    }
    return {status: 'success', data: products};
}

async function getProductById(id: number): Promise< ISuccess<Product> | IError > {
    let product = await productRepository.getProductById(id)

    if (!product) {
        return {status: 'error', message: 'product not found'}
    }

    return {status: 'success', data: product}
    
}


async function createProduct(data: CreateProduct): Promise< ISuccess<Product> | IError >{
    let product = await productRepository.createProduct(data);
    if (!product){
        return {status: "error", message: "product create error"}
    }

    return {status: "success", data: product}
}

const productService = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    createProduct: createProduct,
    // IProduct: IProduct,
} 

export default productService