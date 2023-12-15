const { genarateToken } = require('../config/jwtToken.js')
const { genarateRefreshToken } = require('../config/refreshToken.js')
const { isAdmin } = require('../middlewares/authMiddleware.js')
const userModel = require('../models/userModel.js')
const passport = require('passport');
const asyncHandle = require('express-async-handler');
const validateMongooseDbId = require('../utils/validateMongoose.js');
const jwt =require('jsonwebtoken')

// create user
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

// login user
const loginUser = asyncHandle(async(req,res)=>{
    const {email,password} = req.body
    
    const findUser = await userModel.findOne({email})
    if(findUser && (await findUser.isPasswordMatched(password))){
        const refreshToken = await genarateRefreshToken(findUser?._id)
        const updateUser = await userModel.findByIdAndUpdate(findUser?._id,{
            refreshToken:refreshToken
        },{
            new : true
        })
        res.cookie("refreshToken",refreshToken,{
            httpOnly : true,
            maxAge : 72 * 60 * 60 * 1000
        })
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

// handle refresh token 

const handleRefreshToken = asyncHandle(async(req,res)=>{
    const cookie = req.cookies
    console.log(cookie)
    if(!cookie?.refreshToken){
        res.send({
            success : false,
            message : "No refresh token in cookies"
        })
    }
    const refreshToken = cookie?.refreshToken
    console.log(refreshToken)
    const user = await userModel.findOne({refreshToken})
    if(!user){
        res.status(401).send({
            success : false,
            message : "No refresh token present in db or not matched",
            user
        })
    }
    jwt.verify(refreshToken,process.env.JWT_SECRET,(err,decoded)=>{
        if(err||user.id !== decoded.id){
            res.status(401).send({
                success : false,
                message : "there is something wrong with refresh token"
            })
        }
        const accessToken = genarateToken(user.id)
        res.status(200).send({
            success : true,
            message : "refresh token success",
            accessToken
        })
    })
})

// logout func
const logout = asyncHandle(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await userModel.findOne({ refreshToken });
    if (!user) {
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
      });
      return res.status(200).send({
        success : true,
        message : "clear cookies success"
      }); // forbidden
    }
    await userModel.findOneAndUpdate({ refreshToken }, {
        $set: { refreshToken: "" },
    });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    res.status(200).send({
        success : true,
        message : "clear cookies success"
    }); // forbidden
  });

// get all users
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

// get a user
const getsignUser = async(req,res)=>{
    const {_id} = req.params // lấy trên url
    validateMongooseDbId(_id)
    try {
        const getUser = await userModel.findById(_id)
        res.status(200).json({
            success : true,
            message : "Get user successfully !",
            getUser
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "Get user error !"
        })
    }
}

// update user
const updateUser = asyncHandle(async(req,res)=>{
    const { _id } = req.user
    validateMongooseDbId(_id)
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

// delete a user
const deletesignUser = async(req,res)=>{
    const {_id} = req.params // lấy trên url
    validateMongooseDbId(_id)
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

// set isBlock = true
const blockUser = asyncHandle(async (req, res) => {
    const { id } = req.params;
    validateMongooseDbId(id)
    try {
        const blockusr = await userModel.findByIdAndUpdate(id,{isBlocked: true,},{new: true,});
        res.send(blockusr);
    } catch (error) {
        res.status(500).send({
            success : false,
            message : "block user error !"
        })
    }
});

// set isBlock = false
const unblockUser = asyncHandle(async (req, res) => {
    const { id } = req.params
    validateMongooseDbId(id)
    try {
        const unblock = await userModel.findByIdAndUpdate(id,{isBlocked: false,},{new: true,});
        res.send({
        message: "User UnBlocked",
        });
    } catch (error) {
        res.status(500).send({
            success : false,
            message : "unblock user error !"
        })
    }
});

module.exports = {createUser,loginUser,getAllUsers,getsignUser,deletesignUser
    ,updateUser,blockUser,unblockUser,handleRefreshToken,logout}