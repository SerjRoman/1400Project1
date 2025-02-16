// const productService = require('../services/productService')
import productService from "./productService"

import express, { Express, Request, Response } from 'express'


async function getAllProducts(req: Request, res: Response) {
    const context = await productService.getAllProducts()
    if (context.status == "error"){
        res.send(context.message)
        return;
    }
    res.render('products', {products: context.data, username: res.locals.user.username})
}

async function getProductById(req:Request, res:Response){
    let id = req.params.id
    const result = await productService.getProductById(+id)
    if (result.status == "error"){
        res.send(result.message)
        return;
        
    }
    res.render('product', result.data)

}

async function createProduct(req: Request, res: Response){
    const data = req.body
    
    const result = await productService.createProduct(data);
    if (result.status == 'error'){
        res.send(result.message);
        return;
    }
    res.send('ok')

}

function renderCreateProduct(req:Request, res:Response) {
    res.render('createProduct')
}

const productControllers = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    createProduct: createProduct,
    renderCreateProduct:renderCreateProduct
}

export default productControllers