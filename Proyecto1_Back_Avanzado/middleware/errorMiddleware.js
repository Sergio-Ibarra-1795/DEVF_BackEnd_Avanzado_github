const errorHandler = (err, req, res, next) =>{
    const statusCode = req.statusCode ? res.statusCode :500 
    res.status(statusCode)
    res.json({
        mensaje: err.mensaje,
        stack: process.env.NODE_ENV ==='production' ? null :err.stack

    })
}

module.exports = {
    errorHandler 
}