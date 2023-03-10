const mongoose = require ('mongoose')

const autoSchema = mongoose.Schema({
   marca: {
    type: String,
    require:[true,'Porfavor tecle una marca de auto']
},

modelo: {
    type: String,
    require:[true,'Porfavor tecle un modelo de auto']
},

anio: {
    type: Number,
    require:[true,'Porfavor tecle un año  de auto']
},

color: {
    type: String,
    require:[true,'Porfavor tecle un color de auto']
}, 

fecha_creacion: {
    type: Date,
    require:[true,'Porfavor tecle una fecha de creación']
},

fecha_actualizacion: {
    type: Date,
    require:[true,'Porfavor tecle una fecha de actualización']
}


}, {
    timestamps: true
})


module.exports = mongoose.model('Autos_Database', autoSchema )