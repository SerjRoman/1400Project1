import categoryRepository from "./categoryRepository";
import { Category, Prisma } from "@prisma/client";
import { IError, ISuccess } from "../types/types";
import { CategoryWithProducts, CreateCategory } from "./categoryTypes";

async function getAllCategories(): Promise< IError | ISuccess<Category[]> > {
    const categories = await categoryRepository.getAllCategories();
    if (!categories){
        return {status: "error", message: "Categories Not Found"}
    }
    return {status: "success", data: categories}
}

async function getProductByCategory(name: string): Promise< IError | ISuccess<CategoryWithProducts> > {
    const category = await categoryRepository.findProductByCategory(name);
    if (!category){
        return {status: 'error', message: 'Category Not Found'}
    }
    
    // let products = category.Products
    return {status: 'success', data: category}
}

async function createCategory(data: CreateCategory): Promise< IError | ISuccess<Category> > {
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