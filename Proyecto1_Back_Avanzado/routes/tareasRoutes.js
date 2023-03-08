const express = require('express')
const router = express.Router()

//Importando la funcion getTareas de tarea/Controller
const {getTareas} = require('../controllers/tareaController')


//Creando nuestro 'primer endpoint'
//  '/api/Proyecto1_Back_Avanzado' va a ser sustituido por /

//Ruta para GET
router.get('/', getTareas)

//Ruta para post
router.post('/', (req,res)=>{
    res.status(201).json({mensaje:'Crear una tarea'})
})

//Ruta para PUT
router.put('/:id', (req,res)=>{
    //Ese /:id  equivale a:
    //http://localhost/api/Proyecto1_Back_Avanzado/1
    res.status(200).json({mensaje: `Modificar la tarea ${req.params.id}`})
})

//Ruta para Delete
router.delete('/:id', (req,res)=>{
    res.status(200).json({mensaje:`Eliminar la tarea ${req.params.id}`})
})


module.exports = router 

