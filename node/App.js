import express from "express";
import cors from "cors";
import db from "./database/db.js";
//importar routes
import blogRoutes from "./routes/routes.js";
import usuarioRou from "./routes/UsuarioRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);
app.use('/usuarios', usuarioRou); // Usa las rutas de usuario de routes


try {
    await db.authenticate();
    console.log('Conexión exitosa con la base de datos');
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

app.listen(8000, () => {
    console.log('Servidor funcionando en http://localhost:8000/');
});
