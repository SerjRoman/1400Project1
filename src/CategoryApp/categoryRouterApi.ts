import { Router } from "express";
import categoryControllerApi from './categoryControllerApi'

const router = Router()

router.get('/all', categoryControllerApi.getAllCategoriesApi)

export default router