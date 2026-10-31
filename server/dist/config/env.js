"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    db: {
        host: process.env.DB_HOST || 'mysql-tatialcantara.alwaysdata.net',
        user: process.env.DB_USER || 'tatialcantara',
        password: process.env.DB_PASSWORD || 'VetCare2026',
        database: process.env.DB_NAME || 'tatialcantara_vet'
    }
};
