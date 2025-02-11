import productRepository from "./productRepository";
import { Prisma } from "@prisma/client";

type Product = Prisma.ProductGetPayload<{}>

interface IProductError{
    status: 'error',
    message: string
}

interface IProductsSuccess{
    status: 'success',
    data: Product[]
}

interface IProductSuccess{
    status: 'success',
    data: Product
}

async function getAllProducts(): Promise< IProductsSuccess | IProductError >{
    
    const products = await productRepository.getAllProducts()
    // if (max <= products.length) {
    //     context.products = products.slice(0, max)
    // }

    if (!products){
        return {status: 'error', message: 'products not found'};
    }
    return {status: 'success', data: products};
}

async function getProductById(id: number): Promise< IProductSuccess | IProductError > {
    let product = await productRepository.getProductById(id)

    if (!product) {
        return {status: 'error', message: 'product not found'}
    }

    return {status: 'success', data: product}
    
}


async function createProduct(data: Prisma.ProductCreateInput): Promise< IProductSuccess | IProductError >{
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