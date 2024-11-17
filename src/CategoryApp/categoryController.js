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
const categoryService_1 = __importDefault(require("./categoryService"));
function getAllCategories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const context = yield categoryService_1.default.getAllCategories();
        if (context.status == 'error') {
            res.send(context.message);
        }
        else {
            res.render('allcategories', { categories: context.data });
        }
    });
}
function renderCreateCategory(req, res) {
    res.render('category-create');
}
function createCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        const createdCategory = yield categoryService_1.default.createCategory(data);
        console.log(createdCategory);
        if (createdCategory.status == 'error') {
            res.send(createdCategory.message);
            return;
        }
        res.send('category created');
    });
}
// async function createProduct(req:Request, res:Response) {
//     const data = req.body
//     const createdProduct = await categoryService.createProduct(data)
//     res.send('product created')
// }
function productsByCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const category = req.params.category;
        const data = yield categoryService_1.default.getProductByCategory(category);
        if (data.status == 'error') {
            res.send(data.message);
        }
        else {
            res.render('productbycategory', { category: data.data });
        }
    });
}
const categoryControllers = {
    productsByCategory: productsByCategory,
    createCategory: createCategory,
    renderCreateCategory: renderCreateCategory,
    getAllCategories: getAllCategories
};
exports.default = categoryControllers;
