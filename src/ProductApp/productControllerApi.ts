import { Request, Response } from "express";
import productService from "./productService";


async function getAllProducts(req: Request, res:Response){
    const result = await productService.getAllProducts()
    res.json(result)
}

async function getProductById(req: Request, res:Response) {
    const id = req.params.id
    const result = await productService.getProductById(+id)
    res.json(result)
}

const productControllersApi ={
    getAllProducts: getAllProducts,
    getProductById: getProductById,
}
//(￣y▽￣)╭ Ohohoho.....
//(￣ε(#￣)☆╰╮o(￣皿￣///)
export default productControllersApi