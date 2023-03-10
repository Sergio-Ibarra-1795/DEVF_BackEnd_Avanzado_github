const asyncHandler = require('express-async-handler')
const Devf_try1_base1 =  require ('../models/tareaModel')

//Funcion para ver las tareas
const getTareas = asyncHandler(async (req,res) => {

    //Para que me muestre todas las tareas en mi base 
    const tareas = await Devf_try1_base1.find()
    res.status(200).json(tareas)

})



//Funcion para crear  tareas
const setTareas = asyncHandler(async(req,res) => {
    //Voy a asegurarme que el body de la petición tenga algo
    if(!req.body.texto) {
        //res.status(400).json({message:"Favor de indicar la descripcion de la tarea"})
        res.status(400)
        throw new Error('Favor de teclear una descrpicón para la tarea')
    }

    //Para crear una NUEVA tarea
    const tarea = await Devf_try1_base1.create({
    texto:req.body.texto

    })


    //Si el body de la petición si tiene algo, le voy a indicar que nos indique la tarea del body
    console.log(req.body)
    res.status(201).json(tarea)
   }) 
  
   

//Funcion para actualizar  tarea
const updateTareas = asyncHandler(async(req,res) => {

    //Primero debemos buscar la tarea que queremos modificar a tráves del ID
    const tarea = await Devf_try1_base1.findById(req.params.id)

    //Si existe la tarea buscada en la linea anterior con su ID
    if(!tarea) {
        res.status(400)
        throw new Error ('La tarea que deseas MODIFICAR no existe ')
    }

    //Ahora creamos el objeto de la tarea modificada 
    const tareaModificada = await Devf_try1_base1.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(tareaModificada)
   })



//Funcion para borrar  tarea
const deleteTareas = asyncHandler(async(req,res) => {

    
    //Primero debemos buscar la tarea que queremos ELIMINAR a tráves del ID
    const tarea = await Devf_try1_base1.findById(req.params.id)

    //Si existe la tarea buscada en la linea anterior con su ID
    if(!tarea) {
        res.status(400)
        throw new Error ('La tarea que deseas BORRAR no existe ')
    }

    //'Opcion 1' para borrar la tarea 
    //await tarea.remove
    //res.status(200).json({id: req.params.id})

    //'Opcion 2' para borrar la tarea
    //Creamos el objeto de la tarea modificada 
    const tareaBorrada = await Devf_try1_base1.findByIdAndDelete(req.params.id, {new:true})
    res.status(200).json(tareaBorrada)

   
   })
 

module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas
}