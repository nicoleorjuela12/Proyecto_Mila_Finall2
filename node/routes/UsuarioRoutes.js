import { crearUsuario } from "../controllers/user/UsuarioControlador.js";
import express from 'express';
const usuarioRou = express.Router()

usuarioRou.post('/', crearUsuario);

export default usuarioRou;