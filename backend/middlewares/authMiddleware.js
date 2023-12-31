const userModel = require('../models/userModel.js')
const jwt = require('jsonwebtoken')
const passport = require('passport');
const asyncHandle = require('express-async-handler')
const { genarateToken } = require('../config/jwtToken.js')


// tạo user
const authMiddleware = asyncHandle(async(req,res,next)=>{
    let token // khởi tạo
    if(req?.headers?.authorization?.startsWith('Bearer')){ // true
        token = req.headers.authorization.split(" ")[1]
        try {
            if(token){
                const decoded = jwt.verify(token,"SECRET") // truyền vào biến môi trường .env
                console.log(decoded) //lấy được dữ liệu của token
                const user = await userModel.findById(decoded?.id) // tạo user bằng với giá trị id vừa đc lấy 
                req.user = user // tạo mới phương thức user
                next() // đi tiếp
            }
        } catch (error) {
            res.status(500).send("Not authorization token expired, please login again")
        }
    }else{
        res.status(500).send("There is no token attanded to header")
    }
})

const isAdmin = asyncHandle(async (req, res, next) => {
    const {email} = req.user
    const adminUser = await userModel.findOne({email})
    if(adminUser.role !=='admin'){ // nếu khác admin thì ko được qua
        res.send({message:"you are not an admin"})
    }else{
        next()
    }
});

module.exports = {authMiddleware,isAdmin}