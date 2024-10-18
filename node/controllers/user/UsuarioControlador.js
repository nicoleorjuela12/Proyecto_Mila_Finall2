import RegistrarUsuarioC from "../../models/user/Usuario.js";
import db from "../../database/db.js"


export const crearUsuario = async (req, res) => {
    try {
        const { 
            Nombre, 
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
        } = req.body;

        

        // Preparar la consulta de inserción
        const query = `
            INSERT INTO Usuario 
            (Nombre, apellido, telefono, correo, tipo_documento, numero_documento, rol, contrasena, direccion, barrio, estado, aceptaTerminos)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        // Ejecutar la consulta usando query
        const [result] = await db.query(query, [
            Nombre,
            apellido,
            telefono,
            correo,
            tipo_documento,
            numero_documento,
            rol,
            contrasena,
            direccion,
            barrio,
            estado || 'Activo',  // Si no se proporciona, usar 'Activo' por defecto
            aceptaTerminos || false // Si no se proporciona, usar 'false' por defecto
        ]);

        // Responder con el nuevo usuario creado
        res.status(201).json({ 
            message: 'Usuario creado con éxito', 
            data: { id: result.insertId, ...req.body } 
        });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
    }
};
