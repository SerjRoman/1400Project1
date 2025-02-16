import { Request, Response } from 'express'
import categoryService from './categoryService'

async function getAllCategoriesApi(req: Request, res: Response){
    const result = await categoryService.getAllCategories()

    res.json(result)
}

const getCategoryApi =  {
    getAllCategoriesApi: getAllCategoriesApi
}

export default getCategoryApi