const express = require('express')
const colors = require ('colors')
const dotenv = require('dotenv').config()
//Vamos a mandar a llamar a connectDB que nos ayuda a conectarnos a nuestra base de datos
const connectDB = require('./config/db')

//Para importar el middleware
const {errorHandler} = require('./middleware/errorMiddleware')


//Para establecer el puerto donde la "app va a escuchar"
const port = process.env.PORT || 5000

//Y vamos a conectarnos como tal a nuestra base de datos
connectDB()

//Para crear/ inicializar la app
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Para mandar llamar a la ruta principal que ahora se ha definido en routes
app.use('/api/Proyecto_DemoAutos', require('./routes/autosRoutes'))


//Para usar el middleware
app.use(errorHandler)


//Para crear la escucha en nuestro puerto
app.listen(port, ()=> console.log(`Server iniciado en el puerto ${port}`))