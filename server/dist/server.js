"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const database_1 = require("./config/database");
const env_1 = require("./config/env");
const PORT = env_1.config.port;
const startServer = async () => {
    try {
        await database_1.pool.query("SELECT 1");
        console.log("Conectado existósamente a la base de datos");
        app_1.app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en el puerto: ${PORT}`);
        });
    }
    catch (error) {
        console.error("Error crítico al arrancar la aplicación:", error);
        process.exit(1);
    }
};
startServer();
