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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createOneCategory() {
    return __awaiter(this, void 0, void 0, function* () {
        const category = yield prisma.category.create({
            data: {
                name: 'Keyboards2',
                src: "asdasdasd"
            }
        });
    });
}
function createOneProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield prisma.product.create({
            data: {
                name: 'Keyboard1',
                src: '',
                price: 5,
                categoryId: 2
            }
        });
    });
}
function findOneProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield prisma.product.findUnique({
            where: {
                id: 1
            }
        });
        const category = yield prisma.category.findUnique({
            where: {
                id: product === null || product === void 0 ? void 0 : product.categoryId
            },
            include: {
                Products: true
            }
        });
        console.log(category);
    });
}
function findOneCategory() {
    return __awaiter(this, void 0, void 0, function* () {
        const category = yield prisma.category.findUnique({
            where: {
                id: 1
            },
            include: {
                Products: true
            }
        });
        console.log(category);
    });
}
function createOneUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                username: "Bohdan228",
                email: "bohdan228@gmail.com",
                password: "12345",
                role: 'admin'
            }
        });
    });
}
// async function 
createOneUser().then(() => {
    prisma.$disconnect();
}).catch(err => {
    console.error(err);
    prisma.$disconnect();
});
