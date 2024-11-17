import { userRoleMiddleware } from '../middlewares/userRoleMiddleware';
import categoryControllers from './categoryController';
import productControllers from '../ProductApp/productController';
import {Router} from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/allcategories', categoryControllers.getAllCategories)
router.post('/:category/createProduct', productControllers.createProduct) 
 
router.get('/createCategory',categoryControllers.renderCreateCategory)
router.post('/createCategory', categoryControllers.createCategory)
router.get('/:category', categoryControllers.productsByCategory)


// router.get('/allcategories', categoryControllers.getAllCategories)
// router.post('/:category/createProduct', userRoleMiddleware, productControllers.createProduct) 
 
// router.get('/createCategory',authMiddleware, userRoleMiddleware, categoryControllers.renderCreateCategory)
// router.post('/createCategory', authMiddleware, userRoleMiddleware, categoryControllers.createCategory)
// router.get('/:category', categoryControllers.productsByCategory)



export default router