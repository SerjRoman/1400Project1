"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const productService = require('../services/productService')
const productService_1 = __importDefault(require("./productService"));
function getAllProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const context = yield productService_1.default.getAllProducts();
        if (context.status == "error") {
            res.send("error");
        }
        else {
            res.render('products', { products: context.data, username: res.locals.user.username });
        }
        // console.log(res.locals.user)
    });
}
function getProductById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = req.params.id;
        const result = yield productService_1.default.getProductById(+id);
        if (result.status == "error") {
            res.send("ban");
        }
        else {
            res.render('product', result.data);
        }
    });
}
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        console.log(data);
        const result = yield productService_1.default.createProduct(data);
        if (result.status == 'error') {
            res.send('error');
        }
        res.send('ok');
    });
}
function renderCreateProduct(req, res) {
    res.render('createProduct');
}
const productControllers = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    createProduct: createProduct,
    renderCreateProduct: renderCreateProduct
};
exports.default = productControllers;
