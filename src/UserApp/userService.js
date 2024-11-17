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
const userRepository_1 = __importDefault(require("./userRepository"));
function authUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = yield userRepository_1.default.findUserByEmail(email);
        // if (user){
        //     if (password == user.password){
        //         return user;
        //     }else {}
        // }else {}
        if (!user) {
            return { status: 'error', message: 'user not found' };
        }
        if (user.password != password) {
            return { status: 'error', message: 'nepravilniy password' };
        }
        return { status: 'success', data: user };
    });
}
function registerUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield userRepository_1.default.findUserByEmail(data.email);
        if (user) {
            return { status: 'error', message: 'User exists yo' };
        }
        const yoUser = yield userRepository_1.default.createUser(data);
        if (!yoUser) {
            return { status: 'error', message: 'create error yo' };
        }
        return { status: 'success', data: yoUser };
    });
}
const userService = {
    authUser: authUser,
    registerUser: registerUser
};
// yo this is my new baggy jeans bruh child po
exports.default = userService;
