const express = require ('express')

//Vamos a mandar a llamar a nuestro router de express 
const router = express.Router()


//Importando el controlador del usario 
const {registerUser} =  require('../controllers/userController')


//Cuando se hace un post en la ruta raíz de user, entonces ejecuta el registerUser
router.post('/', registerUser)


//Vamos a exportar a nuestro router de express
module.exports = router 
