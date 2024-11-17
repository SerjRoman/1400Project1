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
const prismaClient_1 = __importDefault(require("../client/prismaClient"));
const client_1 = require("@prisma/client");
// Создание одной Category
function createCategory(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let category = yield prismaClient_1.default.category.create({
                data: data
            });
            // console.log(category)
            return category;
        }
        catch (error) {
            // console.log(error)
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code == 'P2002') {
                    console.log(error.message);
                    throw error;
                }
                else if (error.code === 'P2007') {
                    console.log(error.message);
                    throw error;
                }
                else if (error.code === 'P2003') {
                    console.log(error.message);
                    throw error;
                }
                else if (error.code === 'P2014') {
                    console.log(error.message);
                    throw error;
                }
            }
        }
    });
}
// Получение всех Category
function getAllCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categories = yield prismaClient_1.default.category.findMany({});
            return categories;
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code == 'P2002') {
                    console.log(error.message);
                    throw error;
                }
                else if (error.code === 'P2007') {
                    console.log(error.message);
                    throw error;
                }
                else if (error.code === 'P2003') {
                    console.log(error.message);
                    throw error;
                }
                else if (error.code === 'P2014') {
                    console.log(error.message);
                    throw error;
                }
            }
        }
    });
}
// Получение Category по айди
function getCategoryById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let category = yield prismaClient_1.default.category.findUnique({
                where: {
                    id: id
                }
            });
            return category;
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code == 'P2002') {
                    console.log(error.message);
                    throw error;
                }
                if (error.code == 'P2003') {
                    console.log(error.message);
                    throw error;
                }
                if (error.code == 'P2007') {
                    console.log(error.message);
                    throw error;
                }
                if (error.code == 'P2014') {
                    console.log(error.message);
                    throw error;
                }
            }
        }
    });
}
function findCategoryByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const category = yield prismaClient_1.default.category.findUnique({
                where: {
                    name: name
                }
            });
            return category;
        }
        catch (error) {
            console.log(error);
        }
    });
}
function findProductByCategory(name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const category = yield prismaClient_1.default.category.findUnique({
                where: {
                    name: name
                },
                include: { Products: true }
            });
            return category;
        }
        catch (error) {
            console.log(error);
        }
    });
}
const categoryRepository = {
    createCategory: createCategory,
    findCategoryByName: findCategoryByName,
    getCategoryById: getCategoryById,
    findProductByCategory: findProductByCategory,
    getAllCategories: getAllCategories
};
exports.default = categoryRepository;
