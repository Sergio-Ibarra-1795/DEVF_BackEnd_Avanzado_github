
const asyncHandler = require('express-async-handler')

//Importando el modelo del autoController 
const Autos_Database = require('../models/autoModel')

const getAutos = asyncHandler(async (req,res) => {
    const autos = await Autos_Database.find()
    res.status(200).json(autos)
   
   })
   

const setAutos =  asyncHandler(async(req,res) => {

    // voy a asegurarme que la marca exista en el body de la petición
    if(!req.body.marca) {
       // res.status(400).json({message:"Favor de indicar la marca del auto "})
      res.status(400)
       throw new Error ('Favor de teclearla marca del auto')
    }

    //Para crear un nuevo registro de auto 
    const auto = await Autos_Database.create({
        marca: req.body.marca,
        modelo: req.body.modelo,
        anio: req.body.anio,
        color: req.body.color,
        fecha_creacion: req.body.fecha_creacion,
        fecha_actualizacion: req.body.fecha_actualizacion
    })

    //Le voy a indicar que nos indique el auto agregaod/tecleado en el body del request
    res.status(201).json(auto)
})
   
const updateAutos =  asyncHandler(async(req,res) => {
    res.status(200).json({mensaje: `Modificar el registro de auto ${req.params.id}`})
   })


const deleteAutos =  asyncHandler(async(req,res) => {
    res.status(200).json({mensaje:`Eliminar el registro de auto ${req.params.id}`})
   })


   
   module.exports = {
       getAutos,
       setAutos,
       updateAutos,
       deleteAutos
   }