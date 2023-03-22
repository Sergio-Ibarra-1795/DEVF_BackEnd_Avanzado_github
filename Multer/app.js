const express = require('express')
const multer = require('multer')
const ejs = require('ejs')
const path = require('path')

//crear el storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

//inicializamos a upload para conectarla al storage engine y definir el tamaño 
// de archivo y se define la función para checar el tipo de archivo
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    }
}).single('myImage')

//checamos el tipo del archivo que vamos a subir
function checkFileType(file, cb) {
    //extensiones permitidas
    const fileTypes = /jpeg|jpg|png|gif/

    //verificamos la extension
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())

    //verificamos el mimetype
    const mimetype = fileTypes.test(file.mimetype)

    if (mimetype && extname) {
        return cb(null, true)
    } else {
        cb('Error: Sólo se admiten imagenes')
    }

}



//Inicializamos la app
const app = express()

// Para indicar que EJS será usado para la vista ó view engine 
app.set('view engine', 'ejs')

// carpeta publica para subir nuestro archivos 
app.use(express.static('./public'))

app.get('/', (req, res) => res.render('index'))


//Funcion para definir la ruta para subir la imagen
app.post('/upload', (req, res) => {
    //res.send('probando')
    upload(req, res, (err) => {
        if (err) {
            res.render('index', {
                msg: err
            })
        } else {
            if (req.file == undefined) {
                res.render('index', {
                    msg: 'Error: No seleccionaste ningún archivo'
                })
            } else {
                res.render('index', {
                    msg: 'El archivo subió correctamente',
                    file: `uploads/${req.file.filename}`
                })
            }
        }
    })
})

//Indicamos el puerto en que trabajará la app
const port = 3000

// Esuchamos el puerto que se acaba de declarar (usando una función flecha)
app.listen(port, () => console.log(`Servidor Iniciado en el puerto ${port}`))