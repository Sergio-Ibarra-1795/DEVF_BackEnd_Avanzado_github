const express = require('express')
const dotenv = require('dotenv').config()
//Para importar el middleware
const {errorHandler} = require('./middleware/errorMiddleware')

//Para establecer el puerto donde la "app va a escuchar"
const port = process.env.PORT || 5000

//Para crear/ inicializar la app
const app = express()

//Para indicarle que vamos a usar json
app.use(express.json())

//Para usar el middleware
app.use(errorHandler)


//Para indicarle que vamos a pasar informacion con urlencode
 //Le indico que no quiero usar las 
app.use(express.urlencoded({extended: false}))


// Para mandar a llamar a mi ruta 
app.use('/api/Proyecto1_Back_Avanzado', require('./routes/tareasRoutes'))

//Para crear la escucha en nuestro puerto
app.listen(port, ()=> console.log(`Server iniciado en el puerto ${port}`))