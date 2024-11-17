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
const userController_1 = __importDefault(require("./userController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/login', userController_1.default.authUser);
router.get('/login', userController_1.default.login);
router.post('/registration', userController_1.default.registerUser);
router.get('/registration', userController_1.default.registration);
exports.default = router;
