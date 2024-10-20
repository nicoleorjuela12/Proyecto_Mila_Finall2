import express from "express";
import cors from "cors";
import db from "./database/db.js";
// Importar routes
import blogRoutes from "./routes/routes.js";
import usuarioRou from "./routes/UsuarioRoutes.js";

const app = express();

// Configurar CORS para permitir solo solicitudes desde http://localhost:3000
app.use(cors({
    origin: 'http://localhost:3000', // Especifica el origen permitido
    credentials: true // Habilita el uso de credenciales, como cookies o autenticación
}));


app.use(express.json());

// Usar las rutas
app.use('/blogs', blogRoutes);
app.use('/usuarios', usuarioRou);

// Conexión a la base de datos
try {
    await db.authenticate();
    console.log('Conexión exitosa con la base de datos');
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

// Servidor escuchando en el puerto 8000
app.listen(8000, () => {
    console.log('Servidor funcionando en http://localhost:8000/');
});
