const mongoose = require ('mongoose')

const tareaSchema = mongoose.Schema({
    texto: {
        type: String,
        required: [true, 'Porfavor teclea una tarea'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        require: true 
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('Devf_try1_base1',tareaSchema)

