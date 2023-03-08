const express = require('express')
const dotenv = require('dotenv').config()
//Para establecer el puerto donde la "app va a escuchar"
const port = process.env.PORT || 5000

//Para crear/ inicializar la app
const app = express()

// Para mandar a llamar a mi ruta 
app.use('/api/Proyecto1_Back_Avanzado', require('./routes/tareasRoutes'))

//Para crear la escucha en nuestro puerto
app.listen(port, ()=> console.log(`Server iniciado en el puerto ${port}`))