import { crearUsuario, verificarUsuario, login_session } from "../controllers/user/UsuarioControlador.js";
import  RegistrarUsuarioC  from '../models/user/Usuario.js'; // Asegúrate de que esta ruta sea correcta
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import axios from 'axios';


const usuarioRou = express.Router();

// Middleware para analizar cuerpos JSON
usuarioRou.use(bodyParser.json()); 

// Rutas
usuarioRou.post('/', crearUsuario);
usuarioRou.post('/verificar-usuario', verificarUsuario);
usuarioRou.post('/login', login_session);


export default usuarioRou;
