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
const productRepository_1 = __importDefault(require("./productRepository"));
function getAllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield productRepository_1.default.getAllProducts();
        // if (max <= products.length) {
        //     context.products = products.slice(0, max)
        // }
        if (!products) {
            return { status: 'error', message: 'products not found' };
        }
        return { status: 'success', data: products };
    });
}
function getProductById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let product = yield productRepository_1.default.getProductById(id);
        if (!product) {
            return { status: 'error', message: 'product not found' };
        }
        return { status: 'success', data: product };
    });
}
function createProduct(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let product = yield productRepository_1.default.createProduct(data);
        if (!product) {
            return { status: "error", message: "product create error" };
        }
        return { status: "success", data: product };
    });
}
const productService = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    createProduct: createProduct
};
exports.default = productService;
