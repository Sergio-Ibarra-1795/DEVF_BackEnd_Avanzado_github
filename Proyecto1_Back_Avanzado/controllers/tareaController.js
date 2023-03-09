const asyncHandler = require('express-async-handler')


//Funcion para ver las tareas
const getTareas = asyncHandler( (req,res) => {
 res.status(200).json({mensaje:'Mostrar las tareas'})

})

//Funcion para crear  tareas
const setTareas = asyncHandler((req,res) => {
    //Voy a asegurarme que el body de la petición tenga algo
    if(!req.body.text) {
        //res.status(400).json({message:"Favor de indicar la descripcion de la tarea"})
        res.status(400)
        throw new Error('Favor de teclear una descrpicón para la tarea')
    }
    //Si el body de la petición si tiene algo, le voy a indicar que nos indique la tarea del body
    console.log(req.body)
    res.status(201).json({mensaje:'Crear una tarea'})
   })
  
   
//Funcion para actualizar  tarea
const updateTareas = asyncHandler((req,res) => {
    res.status(200).json({mensaje: `Modificar la tarea ${req.params.id}`})
   })

//Funcion para borrar  tarea
const deleteTareas = asyncHandler((req,res) => {
    res.status(200).json({mensaje:`Eliminar la tarea ${req.params.id}`})
   })
 

module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas
}