"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoleMiddleware = userRoleMiddleware;
function userRoleMiddleware(req, res, next) {
    if (res.locals.user.role === 'admin') {
        next();
    }
    else {
        res.sendStatus(403);
    }
}
