import RegistrarUsuarioC from "../../models/user/Usuario.js";
import { Op } from 'sequelize';
import db from "../../database/db.js"

export const crearUsuario = async (req, res) => {
    try {
        const { 
            nombre, 
            apellido, 
            telefono, 
            correo, 
            tipo_documento, 
            numero_documento, 
            rol = 'Cliente', 
            contrasena, 
            direccion, 
            barrio, 
            estado = 'Activo', 
            aceptaTerminos = false 
        } = req.body;


        // Usar el modelo de Sequelize para crear un nuevo registro
        const nuevoUsuario = await RegistrarUsuarioC.create({
            nombre,
            apellido,
            telefono,
            correo,
            tipo_documento,
            numero_documento,
            rol,
            contrasena,
            direccion,
            barrio,
            estado,
            aceptaTerminos
        });

        // Responder con el nuevo usuario creado
        res.status(201).json({ 
            message: 'Usuario creado con éxito', 
            data: nuevoUsuario 
        });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
    }


    
};

export const verificarUsuario = async (req, res) => {
    const { numero_documento, correo } = req.body;

    try {
        const usuarioExistente = await RegistrarUsuarioC.findOne({
            where: {
                [Op.or]: [
                    { numero_documento: numero_documento },
                    { correo: correo }
                ]
            }
        });

        if (usuarioExistente) {
            return res.status(400).json({ message: 'El documento o el correo ya están registrados' });
        }

        return res.status(200).json({ message: 'Usuario no registrado' });
    } catch (error) {
        console.error('Error al verificar el usuario:', error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

export const login_session = async (req, res) => {
    try {
        const { numero_documento, contrasena } = req.body;

        // Buscar el usuario en la base de datos
        const usuario = await RegistrarUsuarioC.findOne({
            where: {
                [Op.or]: [
                    { numero_documento: numero_documento },
                ]
            }
        });

        if (!usuario) {
            return res.status(404).send({ error: 'Usuario no encontrado' });
        }

        
        if (contrasena !== usuario.contrasena) {
            return res.status(409).json({ error: 'Contraseña inválida' });
        }

        res.send({
            data: {
                user: {
                    id: usuario.id_usuario, // ID del usuario
                    rol: usuario.rol, // Rol del usuario
                    numero_documento: usuario.numero_documento, // Número de documento
                    nombre: usuario.nombre // También puedes incluir el nombre si es necesario
                },
            },
        });
    } catch (error) {
        console.error('Error during login process:', error);
        res.status(500).send({ error: 'Error en el servidor', details: error.message });
    }
};
