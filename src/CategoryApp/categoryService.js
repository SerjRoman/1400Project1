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
const categoryRepository_1 = __importDefault(require("./categoryRepository"));
function getAllCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        const categories = yield categoryRepository_1.default.getAllCategories();
        if (!categories) {
            return { status: "error", message: "Categories Not Found" };
        }
        return { status: "success", data: categories };
    });
}
function getProductByCategory(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const category = yield categoryRepository_1.default.findProductByCategory(name);
        if (!category) {
            return { status: 'error', message: 'Category Not Found' };
        }
        // let products = category.Products
        return { status: 'success', data: category };
    });
}
function createCategory(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let category = yield categoryRepository_1.default.createCategory(data);
        // console.log(category)
        if (!category) {
            return { status: "error", message: "Category create error" };
        }
        return { status: "success", data: category };
    });
}
const categoryService = {
    getAllCategories: getAllCategories,
    getProductByCategory: getProductByCategory,
    createCategory: createCategory
};
exports.default = categoryService;
