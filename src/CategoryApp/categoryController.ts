import express, { Express, Request, Response } from 'express'
import categoryService from "./categoryService"

async function getAllCategories(req:Request, res:Response) {
    const context = await categoryService.getAllCategories()
    if (context.status == 'error') {
        res.send(context.message)
    }else {
        res.render('allcategories',{categories: context.data})
    }

}

function renderCreateCategory(req:Request, res:Response) {
    res.render('category-create')
}


async function createCategory(req:Request, res:Response) {
    const data = req.body
    console.log(data)
    const createdCategory = await categoryService.createCategory(data);
    console.log(createdCategory)
    res.send('category created')

}

// async function createProduct(req:Request, res:Response) {
//     const data = req.body
//     const createdProduct = await categoryService.createProduct(data)
//     res.send('product created')
// }

async function productsByCategory(req:Request, res:Response) {
    const category = req.params.category
    const data = await categoryService.getProductByCategory(category)

    if (data.status == 'error') {
        res.send(data.message)
    } else {
        res.render('productbycategory', {category: data.data})
    }

}

const categoryControllers = {
    productsByCategory: productsByCategory,
    createCategory: createCategory,
    renderCreateCategory: renderCreateCategory,
    getAllCategories: getAllCategories
}

export default categoryControllers