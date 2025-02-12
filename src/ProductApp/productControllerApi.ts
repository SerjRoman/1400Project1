import { Request, Response } from "express";
import productService from "./productService";


async function getAllProducts(req: Request, res:Response){
    const result = await productService.getAllProducts()
    res.json(result)
}

