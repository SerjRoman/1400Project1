// const express = require('express')
// const router = express.Router()
// const productController = require('../controllers/productController')
// router.get('/all', productController.getAllProducts)
// router.get('/:id', productController.getProductById)
// router.post('/create', productController.createProduct)
// module.exports = router
import productControllers from '../controllers/productController';
import {Router} from 'express';

const router = Router();

router.get('/', productControllers.getAllProducts);
router.get('/:id', productControllers.getProductById); 
router.post('/create', productControllers.createProduct);

export default router;