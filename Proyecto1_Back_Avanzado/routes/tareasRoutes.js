const express = require('express')
const router = express.Router()
//Importando la funcion getTareas de tarea/Controller
const {getTareas, setTareas, updateTareas, deleteTareas} = require('../controllers/tareaController')

//Rutas para GET y post 
router.route('/').get(getTareas).post(setTareas)

//Rutas para PUT y DELETE
router.route('/:id').put(updateTareas).delete(deleteTareas)



module.exports = router 

