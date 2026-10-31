"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(`[Error] ${err.message}`);
    const status = err.statusCode || 500;
    res.status(status).json({
        success: false,
        error: err.message || 'Error interno del servidor'
    });
};
exports.errorHandler = errorHandler;
