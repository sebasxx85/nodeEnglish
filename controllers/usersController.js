import express from 'express';
import bcrypt from 'bcrypt';
import { getUsers, findUser, addUser } from '../service/usersService.js';

const router = express.Router();

// Obtener todos los usuarios (sin contraseñas)
router.get('/usuarios', async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        console.error('Error obteniendo usuarios:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Registrar nuevo usuario
router.post('/usuarios', async (req, res) => {
    try {
        const { user, email, password } = req.body;

        if (!user || !email || !password) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const newUser = await addUser(user, email, password);

        if (!newUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        res.status(201).json({
            message: 'Usuario creado exitosamente',
            user: newUser
        });

    } catch (error) {
        console.error('Error registrando usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Login de usuario con verificación segura
router.post('/login', async (req, res) => {
    try {
        const { usuario, password } = req.body;

        if (!usuario || !password) {
            return res.status(400).json({ message: 'Usuario y contraseña son obligatorios' });
        }

        const user = await findUser(usuario);

        if (!user) {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }

        res.json({
            message: 'Login exitoso',
            user: {
                name: user.name,
                score: user.score,
                language: user.language,
                avatar: user.avatar
            }
        });

    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

export default router;