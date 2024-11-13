import { userRoleMiddleware } from '../middlewares/userRoleMiddleware';
import categoryControllers from './categoryController';
import productControllers from '../ProductApp/productController';
import {Router} from 'express';

const router = Router();
router.get('/:category', categoryControllers.productByCategory)
router.get('/allcategories', categoryControllers.getAllCategories)
router.post('/:category/createProduct', userRoleMiddleware, productControllers.createProduct) 
router.get('/:category/createProduct', userRoleMiddleware, categoryControllers.renderCreateProduct) 
router.get('/createCategory', userRoleMiddleware, categoryControllers.renderCreateCategory)
router.post('/createCategory', userRoleMiddleware, categoryControllers.createCategory)




export default router