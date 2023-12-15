const { genarateToken } = require('../config/jwtToken.js')
const { isAdmin } = require('../middlewares/authMiddleware.js')
const userModel = require('../models/userModel.js')
const asyncHandle = require('express-async-handler')
const createUser = async(req,res)=>{
    const {email} = req.body
    const exisitingUser = await userModel.findOne({email}) // kiểm tra có email nào chưa 
        if(exisitingUser){
            return res.status(200).send({
                success : true,
                message : 'Alrealy register please login' // nếu tìm thấy có tồn tại 
            })
        }
    try {
        const newUser = new userModel(req.body).save()
        res.status(201).send({
            newUser:req.body,
            success:true,
            message : "Create new user successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message : "Create new User False",
            success : false,
            error:error
        })
    }
}

const loginUser = asyncHandle(async(req,res)=>{
    console.log(req.body)
    const {email,password} = req.body

    const findUser = await userModel.findOne({email})
    if(findUser && (await findUser.isPasswordMatched(password))){
        res.status(201).send({
            success:true,
            message : "Login successfully",
            _id : findUser?._id,
            firstname : findUser?.firstname,
            lastname : findUser?.lastname,
            email : findUser?.email,
            role : findUser?.role,
            token : genarateToken(findUser?._id), // hiển thị ra token
        })
    }else{
        return res.status(200).send({
            success : true,
            message : 'please create new user, Invalid' // nếu tìm thấy có tồn tại 
        })
    }

})

const getAllUsers = async(req,res)=>{
    try {
        const user = await userModel.find({})
        res.status(200).send({
            success : true,
            message : "Get all users successfully !",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "Get all users error !"
        })
    }
}

const getsignUser = async(req,res)=>{
    const {_id} = req.params // lấy trên url
    try {
        const user = await userModel.findById(_id)
        res.status(200).json({
            success : true,
            message : "Get user successfully !",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "Get user error !"
        })
    }
}

const updateUser = asyncHandle(async(req,res)=>{
    const {_id} = req.params
    try {
        const user = await userModel.findByIdAndUpdate(_id,{
            firstname : req?.body?.firstname,
            lastname : req?.body?.lastname,
            email :  req?.body?.email,
        },{
            new :true
        })
        res.status(200).send({
            success : true,
            message : "Updated user successfully !",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "Update user error !"
        })
    }
})

const deletesignUser = async(req,res)=>{
    const {_id} = req.params // lấy trên url
    try {
        const user = await userModel.findByIdAndDelete(_id)
        res.status(200).json({
            success : true,
            message : "delete user successfully !"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "delete user error !"
        })
    }
}


module.exports = {createUser,loginUser,getAllUsers,getsignUser,deletesignUser,updateUser}