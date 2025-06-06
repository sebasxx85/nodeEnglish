//controllers/usersController.js
import express from 'express';
import bcrypt from 'bcrypt';
import { getUsers, findUser, addUser } from '../service/usersService.js';

const router = express.Router();

// Obtener todos los usuarios (sin contraseñas)
router.get('/usuarios', (req, res) => {
    res.json(getUsers());
});

// Registrar nuevo usuario
router.post('/usuarios', (req, res) => {
    const { user, email, password } = req.body;

    if (!user || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const newUser = addUser(user, email, password);
    if (!newUser) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    }

    res.status(201).json({
        message: 'Usuario creado exitosamente',
        user: newUser
    });
});

// Login de usuario con verificación segura
router.post('/login', (req, res) => {
    const { usuario, password } = req.body;

    const user = findUser(usuario);
    if (!user) {
        return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);
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
});

export default router;
