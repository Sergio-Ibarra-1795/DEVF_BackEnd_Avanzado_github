const getTareas = (req,res) => {
 res.status(200).json({mensaje:'Mostrar las tareas'})

}

module.exports = {
    getTareas
}