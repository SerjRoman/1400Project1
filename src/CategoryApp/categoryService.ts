import categoryRepository from "./categoryRepository";
import { Prisma } from "@prisma/client";
import { ICategoriesSuccess, ICategoryError, ICategorySuccess, ICategoryWithProductsSuccess } from "./types";


// type Product = Prisma.ProductGetPayload<{}>

// type Category = Prisma.CategoryGetPayload<{}>

// type CategoryWithProducts = Prisma.CategoryGetPayload<{
//     include: {
//         Products: true
//     }
// }>
// // {id: number, name: string, Products: [{name: string, id: number}]}

// interface ICategoryError{
//     status: 'error',
//     message: string
// }

// interface ICategoriesSuccess{
//     status: 'success',
//     data: Category[]
// }

// interface ICategorySuccess{
//     status: 'success',
//     data: Category
// }
// interface ICategoryWithProductsSuccess{
//     status: 'success',
//     data: CategoryWithProducts
// }

import { ICategoriesSuccess, ICategoryError, ICategorySuccess, ICategoryWithProductsSuccess } from "./types";

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

async function createCategory(data: Prisma.CategoryCreateInput): Promise< ICategoryError | ICategorySuccess > {
    const category = await categoryRepository.createCategory(data)
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