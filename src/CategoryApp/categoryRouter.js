"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRoleMiddleware_1 = require("../middlewares/userRoleMiddleware");
const categoryController_1 = __importDefault(require("./categoryController"));
const productController_1 = __importDefault(require("../ProductApp/productController"));
const express_1 = require("express");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.get('/allcategories', categoryController_1.default.getAllCategories);
router.get('/createCategory', authMiddleware_1.authMiddleware, userRoleMiddleware_1.userRoleMiddleware, categoryController_1.default.renderCreateCategory);
router.get('/:category', categoryController_1.default.productsByCategory);
router.get('/:category/createProduct', authMiddleware_1.authMiddleware, userRoleMiddleware_1.userRoleMiddleware, productController_1.default.renderCreateProduct);
router.post('/:category/createProduct', authMiddleware_1.authMiddleware, userRoleMiddleware_1.userRoleMiddleware, productController_1.default.createProduct);
router.post('/createCategory', authMiddleware_1.authMiddleware, userRoleMiddleware_1.userRoleMiddleware, categoryController_1.default.createCategory);
exports.default = router;
