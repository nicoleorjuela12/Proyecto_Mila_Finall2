import db from "../../database/db.js";
import { DataTypes } from "sequelize";


const RegistrarUsuarioC = db.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    tipo_documento: {
        type: DataTypes.ENUM('Cedula de ciudadania', 'Cedula de extranjeria'),
        allowNull: false
    },
    numero_documento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    rol: {
        type: DataTypes.ENUM('administrador', 'mesero', 'Cliente'),
        allowNull: false
    },
    clave: {
        type: DataTypes.STRING(12),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    barrio: {
        type: DataTypes.STRING(50)
    },
    estado: {
        type: DataTypes.ENUM('Activo', 'Inactivo'),
        defaultValue: 'Activo'
    },
    aceptaTerminos: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
});

export default  RegistrarUsuarioC;