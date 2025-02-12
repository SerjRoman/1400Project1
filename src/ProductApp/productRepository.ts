import { Prisma } from '@prisma/client';
import client from '../client/prismaClient';
import { errors, IErrors } from '../config/errorCodes';
import { IProduct, ICreateProduct, IProductResponse } from './types';

async function getAllProducts(): Promise<IProductResponse> {
    try {
        const products = await client.product.findMany();
        return { status: 'success', data: products };
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code in Object.keys(errors)) {
                const errorKey: keyof IErrors = error.code;
                console.error(errors[errorKey]);
                return { status: 'error', message: errors[errorKey] };
            }
        }
        console.error('Error fetching products:', error);
        return { status: 'error', message: 'Error fetching products' };
    }
}

async function getProductById(id: number): Promise<IProductResponse> {
    try {
        const product = await client.product.findUnique({
            where: {
                id: id
            }
        });
        if (!product) {
            return { status: 'error', message: 'Product not found' };
        }
        return { status: 'success', data: product };
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        return { status: 'error', message: `Error fetching product with id ${id}` };
    }
}

async function createProduct(data: ICreateProduct): Promise<IProductResponse> {
    try {
        const product = await client.product.create({
            data: data
        });
        return { status: 'success', data: product };
    } catch (error) {
        console.error('Error creating product:', error);
        return { status: 'error', message: 'Error creating product' };
    }
}

const productRepository = {
    getAllProducts,
    getProductById,
    createProduct
};

export default productRepository;
