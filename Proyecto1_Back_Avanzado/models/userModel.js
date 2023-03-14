const mongoose = require('mongoose')


const userSchema = mongoose.userSchema({
    name: {
        type: String,
        require: [true, 'Favor de teclear nombre de usuario']
    },
    email: {
        type: String,
        require: [true, 'Favor de teclear email de usuario'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'Favor de teclear password de usuario'],
    },

},{
    timestamps : true
})

module.exports = mongoose.model('user',userSchema)