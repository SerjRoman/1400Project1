import productRepository from './ProductRepository';
import { ICreateProduct, IProductResponse } from './types';

async function getAllProducts(): Promise<IProductResponse> {
    return await productRepository.getAllProducts();
}

async function getProductById(id: number): Promise<IProductResponse> {
    return await productRepository.getProductById(id);
}

async function createProduct(data: ICreateProduct): Promise<IProductResponse> {
    return await productRepository.createProduct(data);
}

const productService = {
    getAllProducts,
    getProductById,
    createProduct
};

export default productService;
