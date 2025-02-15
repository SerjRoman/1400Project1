import categoryRepository from "./categoryRepository";
<<<<<<< HEAD
import { Prisma } from "@prisma/client";
import { ICategoriesSuccess,
    ICategoryError, 
    ICategorySuccess, 
    ICategoryWithProductsSuccess, 
    Product, 
    Category 
} from "./types";



async function getAllCategories(): Promise< ICategoryError | ICategoriesSuccess > {
=======
import { Category, CategoryWithProducts } from "./types";
import { IError, ISuccess } from '../types/types'

async function getAllCategories(): Promise< IError | ISuccess<Category[]> > {
>>>>>>> main
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

async function createCategory(data: Category): Promise< IError | ISuccess<Category> > {
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