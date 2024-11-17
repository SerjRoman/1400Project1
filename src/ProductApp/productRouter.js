"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
// const router = express.Router()
// const productController = require('../controllers/productController')
// router.get('/all', productController.getAllProducts)
// router.get('/:id', productController.getProductById)
// router.post('/create', productController.createProduct)
// module.exports = router
const authMiddleware_1 = require("../middlewares/authMiddleware");
const productController_1 = __importDefault(require("./productController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use(authMiddleware_1.authMiddleware);
router.get('/', authMiddleware_1.authMiddleware, productController_1.default.getAllProducts);
router.get('/:id', productController_1.default.getProductById);
exports.default = router;
