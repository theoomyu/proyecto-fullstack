"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database");
const errorHandler_1 = require("./middleware/errorHandler");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
// Ruta de bienvenida
exports.app.get('/', (req, res) => {
    res.send("API de la Veterinaria funcionando 🐾");
});
// RUTA PRINCIPAL: Obtener todos los servicios de la veterinaria
exports.app.get('/api/servicios', async (req, res) => {
    try {
        const [rows] = await database_1.pool.query("SELECT id, nombre, descripcion, precio, duracion_minutos, categoria, disponible FROM servicios");
        res.json({ success: true, data: rows });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Error al obtener los servicios" });
    }
});
// Ruta para obtener un servicio específico por ID
exports.app.get('/api/servicios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await database_1.pool.query("SELECT * FROM servicios WHERE id = ?", [id]);
        if (rows.length === 0) {
            return res.status(404).json({ success: false, error: "Servicio no encontrado" });
        }
        res.json({ success: true, data: rows[0] });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Error al obtener el servicio" });
    }
});
// Ruta para obtener proveedores
exports.app.get('/proveedores', async (req, res) => {
    try {
        const [rows] = await database_1.pool.query("SELECT idproveedor, nombreempresa, nombrecontacto, cargocontacto, ciudad, pais, region FROM proveedores");
        res.json({ success: true, data: rows });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Error al obtener los proveedores" });
    }
});
// Ruta para obtener promociones
exports.app.get('/promociones', async (req, res) => {
    try {
        const [rows] = await database_1.pool.query("SELECT idpromocion, titulo, descripcion, descuento_porcentaje, fecha_inicio, fecha_fin, activa FROM promociones WHERE activa = 1");
        res.json({ success: true, data: rows });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Error al obtener las promociones" });
    }
});
// Ruta para obtener empleados
exports.app.get('/empleados', async (req, res) => {
    try {
        const [rows] = await database_1.pool.query("SELECT idempleado, nombre, cargo, ciudad, pais, especialidad, activo FROM empleados WHERE activo = 1");
        res.json({ success: true, data: rows });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Error al obtener los empleados" });
    }
});
// Ruta POST para recibir el formulario
exports.app.post('/contacto', async (req, res) => {
    try {
        const { nombre, email, telefono, mensaje } = req.body;
        // Validación básica en el servidor
        if (!nombre || !email || !mensaje) {
            return res.status(400).json({ success: false, error: "Faltan campos obligatorios" });
        }
        // Insertar en la base de datos
        const [result] = await database_1.pool.query("INSERT INTO contactos (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)", [nombre, email, telefono, mensaje]);
        res.status(201).json({
            success: true,
            message: "Mensaje enviado y guardado correctamente"
        });
    }
    catch (error) {
        console.error("Error al guardar el contacto:", error);
        res.status(500).json({ success: false, error: "Error interno del servidor" });
    }
});
//Ruta para actualizar un servicio existente
exports.app.put('/api/servicios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, duracion_minutos, categoria, disponible } = req.body;
        // Validación básica
        if (!nombre || !precio || !categoria) {
            return res.status(400).json({ success: false, error: "Faltan campos obligatorios" });
        }
        const [result] = await database_1.pool.query("UPDATE servicios SET nombre = ?, descripcion = ?, precio = ?, duracion_minutos = ?, categoria = ?, disponible = ? WHERE id = ?", [nombre, descripcion, precio, duracion_minutos, categoria, disponible, id]);
        res.json({ success: true, message: "Servicio actualizado correctamente" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Error al actualizar el servicio" });
    }
});
//Ruta para eliminar un servicio
exports.app.delete('/api/servicios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await database_1.pool.query("DELETE FROM servicios WHERE id = ?", [id]);
        res.json({ success: true, message: "Servicio eliminado correctamente" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Error al eliminar el servicio" });
    }
});
// Middleware para rutas no encontradas
exports.app.use((req, res) => {
    res.status(404).json({ success: false, error: "Ruta no encontrada" });
});
exports.app.use(errorHandler_1.errorHandler);
