const express = require('express')
const colors = require ('colors')
const dotenv = require('dotenv').config()

//Para importar el middleware
const {errorHandler} = require('./middleware/errorMiddleware')


//Para establecer el puerto donde la "app va a escuchar"
const port = process.env.PORT || 5000

//Para crear/ inicializar la app
const app = express()

//Para mandar llamar a la ruta principal que ahora se ha definido en routes
app.use('/api/Proyecto_DemoAutos', require('./routes/autosRoutes'))


//Para indicarle que vamos a pasar informacion con urlencode
 //Le indico que no quiero usar las 
 app.use(express.urlencoded({extended: false}))


//Para usar el middleware
app.use(errorHandler)


//Vamos a mandar a llamar a connectDB que nos ayuda a conectarnos a nuestra base de datos
const connectDB = require('./config/db')
const { connect } = require('mongoose')


//Y vamos a conectarnos como tal a nuestra base de datos
connectDB()


//Para crear la escucha en nuestro puerto
app.listen(port, ()=> console.log(`Server iniciado en el puerto ${port}`))