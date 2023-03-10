const express = require('express')
const router = express.Router()



//Importando la funcion getTareas de tarea/Controller
const {getAutos, setAutos, updateAutos, deleteAutos} = require('../controllers/autoController')


//Rutas para GET y post 
router.route('/').get(getAutos).post(setAutos)

//Rutas para PUT y DELETE
router.route('/:id').put(updateAutos).delete(deleteAutos)



module.exports = router 
