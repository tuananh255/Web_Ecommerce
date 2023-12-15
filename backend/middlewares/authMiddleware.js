const userModel = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
const asyncHandle = require('express-async-handler')

const authMiddleware = asyncHandle(async(req,res,next)=>{
    let token
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1]
        try {
            if(token){
                const decoded = jwt.verify(token,process.env.JWT_SECRET)
                console.log(decoded)
                const user = await userModel.findById(decoded?._id)
                req.user = user
                next()
            }
        } catch (error) {
            res.status(500).send("Not authorization token expired, please login again")
        }
    }else{
        res.status(500).send("There is no token attanded to header")
    }
})

const isAdmin = asyncHandle(async(req,res,next)=>{
    // console.log(req.user)
})

module.exports = {authMiddleware,isAdmin}