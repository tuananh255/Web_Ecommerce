// not found 

const notFound = (req,res,next)=>{
    const error = new Error(`Not Found : ${req.originalUrl}`)
    res.status(404)
    next(error)
}

// error handle
const errorHandle = (err,req,res,next)=>{
    const statuscode = res.statusCode == 200 ? 500 : res.statusCode
    res.status(statuscode).send({
        message : err?.message,
        stack : err?.stack
    })
}

module.exports = {errorHandle,notFound}