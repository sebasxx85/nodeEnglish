// server.js
import express from 'express';
import cors from 'cors';
import usersRoutes from './controllers/usersController.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Usar las rutas del controlador
app.use('/api', usersRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
