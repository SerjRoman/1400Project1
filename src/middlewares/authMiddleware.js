"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = require("jsonwebtoken");
const token_1 = require("../config/token");
function authMiddleware(req, res, next) {
    const cookies = req.cookies;
    if (cookies.token) {
        // console.log("user authenticated ")
        const token = (0, jsonwebtoken_1.verify)(cookies.token, token_1.SECRET_KEY);
        // console.log(token)
        res.locals.user = token;
        next();
    }
    else {
        res.sendStatus(401);
    }
}
