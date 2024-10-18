//

import BlogModel from "../models/BlogModel.js";


//** Metodos para la crud */

//mostrar todos los registros

export const getAllBlogs = async (req,res) =>{
    try{
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    }catch (error){
        res.json({mesagge: error.message})

    }
}

//Mostrar registro

export const getBlog = async (req, res) => {

    try{
        const blog = await BlogModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(blog[ 0])
    }catch (error){
        res.json({mesagge: error.message})

    }

}

//Crear registro

export const CreateBlog = async (req, res) => {
    try{

        await BlogModel.create(req.body)
        res.json({
            "message ": "!Registro creado exitosamente"
        })

    }
    catch (error){
        res.json({mesagge: error.message})

    }
}

//actualizar un registro

export const updateBlog = async (req,res) =>{
    try{
        await BlogModel.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.json({
            "message ": "!actualziado  exitosamente"
        })
    }

    catch (error){
        res.json({mesagge: error.message})

    }
}

//eliminar un regsitro 

export const deleteBlog = async (req,res) =>{

    try{
        await BlogModel.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({
            "message ": "!elimiando  exitosamente"
        })
    }

    catch (error){
        res.json({mesagge: error.message})

    }

}