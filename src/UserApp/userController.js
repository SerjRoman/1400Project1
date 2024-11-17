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
const userService_1 = __importDefault(require("./userService"));
const token_1 = require("../config/token");
const jsonwebtoken_1 = require("jsonwebtoken");
function login(req, res) {
    res.render('login');
}
function registration(req, res) {
    res.render('registration');
}
function authUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(req.body)
        // // метод cookie отправляет специальный заголовок Set-Cookie
        // res.cookie('user', req.body.email)
        // res.sendStatus(200)
        const data = req.body;
        const user = yield userService_1.default.authUser(data.email, data.password);
        if (user.status == 'error') {
            res.send(user.message);
            return;
        }
        const token = (0, jsonwebtoken_1.sign)(user.data, token_1.SECRET_KEY, { expiresIn: '1h' });
        res.cookie('token', token);
        res.sendStatus(200);
    });
}
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        const result = yield userService_1.default.registerUser(data);
        if (result.status == 'error') {
            res.send(result.message);
            return;
        }
        const token = (0, jsonwebtoken_1.sign)(result.data, token_1.SECRET_KEY, { expiresIn: '1h' });
        res.cookie('token', token);
        res.sendStatus(200);
    });
}
const userController = {
    login: login,
    authUser: authUser,
    registration: registration,
    registerUser: registerUser,
};
exports.default = userController;
