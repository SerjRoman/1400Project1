// const productService = require('../services/productService')
import productService from "./productService"

import express, { Express, Request, Response } from 'express'


async function getAllProducts(req:Request, res:Response) {
    const context = await productService.getAllProducts()
    if (context.status == "error"){
        res.send(`${context.status}, ${context.message}`)
    } else{
        res.render('products', {products: context.data, username: res.locals.user.username})
    }
}

async function getProductById(req:Request, res:Response){
    let id = req.params.id
    const result = await productService.getProductById(+id)
    if (result.status == "error"){
        res.send(`${result.status}, ${result.message}`)
    } else{
        res.render('product', result.data)
    }
}
// 
async function createProduct(req:Request, res:Response){
    const data = req.body
    console.log(data)
    
    const result = await productService.createProduct(data);
    if (result.status == 'error'){
        res.send('error');
    } else {
        res.send('ok')
    }

}

function renderCreateProduct(req:Request, res:Response) {
    res.render('createProduct')
}

// function getProducts



const productControllers = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    createProduct: createProduct,
    renderCreateProduct:renderCreateProduct
}

export default productControllers