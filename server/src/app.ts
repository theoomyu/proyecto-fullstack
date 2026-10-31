import express, { Request, Response } from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Servicio } from './models/Servicio';
import { Usuario } from './models/Usuario';
import { verificarToken } from '../middleware/auth';
import { errorHandler } from '../middleware/errorHandler';

export const app = express();

// 1. Configuración de CORS
app.use(cors({
    origin: [
        'https://jovial-travesseiro-3575e8.netlify.app',
        'http://localhost:5173'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());


app.post('/api/auth/registro', async (req: Request, res: Response) => {
    try {
        const { nombre, email, password } = req.body;

        if (!nombre || !email || !password) {
            return res.status(400).json({ success: false, error: 'Todos los campos son obligatorios' });
        }

        const usuarioExiste = await Usuario.findOne({ email });
        if (usuarioExiste) {
            return res.status(400).json({ success: false, error: 'El correo ya está registrado' });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const nuevoUsuario = new Usuario({ nombre, email, password: passwordHash });
        await nuevoUsuario.save();

        res.status(201).json({ success: true, message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Error en el servidor' });
    }
});

//Inicio de sesión
app.post('/api/auth/login', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, error: 'Email y contraseña son obligatorios' });
        }

        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ success: false, error: 'Credenciales incorrectas' });
        }

        const passwordValido = await bcrypt.compare(password, usuario.password);
        if (!passwordValido) {
            return res.status(400).json({ success: false, error: 'Credenciales incorrectas' });
        }

        const token = jwt.sign(
            { id: usuario._id, rol: usuario.rol },
            process.env.JWT_SECRET!,
            { expiresIn: '2h' }
        );

        res.json({ success: true, token, usuario: { nombre: usuario.nombre, email: usuario.email } });
     } catch (error) {
    console.error("ERROR EN LOGIN:", error);
    res.status(500).json({ success: false, error: 'Error en el servidor' });
  }
});


//Listar servicios
app.get('/api/servicios', async (req: Request, res: Response) => {
    try {
        const servicios = await Servicio.find();
        res.json({ success: true, data: servicios });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error al obtener los servicios' });
    }
});

app.post('/api/servicios', verificarToken, async (req: Request, res: Response) => {
    try {
        const nuevoServicio = new Servicio(req.body);
        await nuevoServicio.save();
        res.status(201).json({ success: true, data: nuevoServicio });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error al crear el servicio' });
    }
});

app.put('/api/servicios/:id', verificarToken, async (req: Request, res: Response) => {
    try {
        const servicioActualizado = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!servicioActualizado) {
            return res.status(404).json({ success: false, error: 'Servicio no encontrado' });
        }
        res.json({ success: true, data: servicioActualizado });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error al actualizar el servicio' });
    }
});

app.delete('/api/servicios/:id', verificarToken, async (req: Request, res: Response) => {
    try {
        const servicioEliminado = await Servicio.findByIdAndDelete(req.params.id);
        if (!servicioEliminado) {
            return res.status(404).json({ success: false, error: 'Servicio no encontrado' });
        }
        res.json({ success: true, message: 'Servicio eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error al eliminar el servicio' });
    }
});

// Ruta de bienvenida
app.get('/', (req: Request, res: Response) => {
    res.send("API de la Veterinaria con MongoDB funcionando 🐾");
});

app.use((req: Request, res: Response) => {
    res.status(404).json({ success: false, error: 'Ruta no encontrada' });
});

app.use(errorHandler);