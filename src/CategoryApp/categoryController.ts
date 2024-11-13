import express, { Express, Request, Response } from 'express'
import categoryService from "./categoryService"

async function getAllCategories(req:Request, res:Response) {
    const context = await categoryService.getAllCategories()
    res.render('allcategories', context)

}



async function getCategoryById(req:Request, res:Response){

    const id = Number(req.params.id)
    const data = await categoryService.getProductById(id)
    if (id <= data.length){
        res.render('productbycategory', data.context)
    } else{
        res.send("ban")
    }
}


function renderCreateCategory(req:Request, res:Response) {
    res.render('create-category')
}
function renderCreateProduct(req:Request, res:Response) {
    res.render('createProduct')
}

async function createCategory(req:Request, res:Response) {
    const data = req.body
    const createdCategory = await categoryService.createCategory(data);
    res.send('category created')
}

// async function createProduct(req:Request, res:Response) {
//     const data = req.body
//     const createdProduct = await categoryService.createProduct(data)
//     res.send('product created')
// }

async function productByCategory(req:Request, res:Response) {
    const category = req.params.category
    const data = await categoryService.getProductByCategory(category)
    
    if (data.length == 0){
        res.send('No products found in this category')
    } else{
        res.render('productbycategory', data.context)
    }

}

const categoryControllers = {
    productByCategory: productByCategory,
    createCategory: createCategory,
    renderCreateCategory: renderCreateCategory,
    getCategoryById: getCategoryById,
    getAllCategories: getAllCategories,
    renderCreateProduct: renderCreateProduct


}

export default categoryControllers