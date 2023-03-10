
const asyncHandler = require('express-async-handler')

const getAutos = asyncHandler( (req,res) => {
    res.status(200).json({mensaje:'Mostrar los autos'})
   
   })
   

const setAutos =  asyncHandler((req,res) => {

    if(!req.body.marca) {
       // res.status(400).json({message:"Favor de indicar la marca del auto "})
       res.status(400)
       throw new Error ('Favor de teclearla marca del auto')
    }
    //Le voy a indicar que nos indique el auto agregaod/tecleado en el body del request
    console.log(req.body)
    res.status(201).json({mensaje:'Crear un registro de auto'})
})
   
const updateAutos =  asyncHandler((req,res) => {
    res.status(200).json({mensaje: `Modificar el registro de auto ${req.params.id}`})
   })


const deleteAutos =  asyncHandler((req,res) => {
    res.status(200).json({mensaje:`Eliminar el registro de auto ${req.params.id}`})
   })


   
   module.exports = {
       getAutos,
       setAutos,
       updateAutos,
       deleteAutos
   }