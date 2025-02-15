import { create } from "ts-node";
import categoryRepository from "./categoryRepository";
import { Prisma } from "@prisma/client";

import { IError, ISuccess, Category, CategoryWithProducts } from '../types/types'

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
    return {status: 'success', data: category}
}

async function createCategory(data: Prisma.CategoryCreateInput): Promise< IError | ISuccess<Category> > {
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