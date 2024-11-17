import { create } from "ts-node";
import categoryRepository from "./categoryRepository";
import { Prisma } from "@prisma/client";

interface IProduct{
    id: number,
    name: string,
    src: string,
    price: number,
    description: string | null,
}

interface ICategory{
    id: number
    name: string
    description: string | null
    src: string
    
}

interface ICategoryWithProducts{
    id: number
    name: string
    description: string | null
    src: string,
    Products: IProduct[]
}

interface ICategoryError{
    status: 'error',
    message: string
}

interface ICategoriesSuccess{
    status: 'success',
    data: ICategory[]
}

interface ICategorySuccess{
    status: 'success',
    data: ICategory
}
interface ICategoryWithProductsSuccess{
    status: 'success',
    data: ICategoryWithProducts
}

async function getAllCategories(): Promise< ICategoryError | ICategoriesSuccess > {
    const categories = await categoryRepository.getAllCategories();
    if (!categories){
        return {status: "error", message: "Categories Not Found"}
    }
    return {status: "success", data: categories}
}

async function getProductByCategory(name: string): Promise< ICategoryError | ICategoryWithProductsSuccess > {
    const category = await categoryRepository.findProductByCategory(name);
    if (!category){
        return {status: 'error', message: 'Category Not Found'}
    }
    
    // let products = category.Products
    return {status: 'success', data: category}
}

async function createCategory(data: ICategory): Promise< ICategoryError | ICategorySuccess > {
    let category = await categoryRepository.createCategory(data)
    if (!category){
        return {status: "error", message: "Category create error"}
    }
    return {status: "success", data: category}
}

const categoryService = {
    getAllCategories: getAllCategories,
    getProductByCategory: getProductByCategory,
    createCategory: createCategory
}
export default categoryService