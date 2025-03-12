import {Router} from "express"
import productControllersApi from "./productControllerApi"

const router = Router()

router.get('/all', productControllersApi.getAllProducts)
router.get('/:id', productControllersApi.getProductById)

export default router

//o((⊙﹏⊙))o.