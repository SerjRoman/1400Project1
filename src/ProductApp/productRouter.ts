import { Router } from 'express';
import productController from './ProductController';

const router = Router();

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);

export default router;
