const { genarateToken } = require('../config/jwtToken.js')
const { genarateRefreshToken } = require('../config/refreshToken.js')
const userModel = require('../models/userModel.js')
const asyncHandle = require('express-async-handler');
const validateMongooseDbId = require('../utils/validateMongoose.js');
const jwt =require('jsonwebtoken');
const { sendEmail } = require('./emailController.js');
const crypto = require('crypto');
const cartModel = require('../models/cartModel.js');
const productModel = require('../models/productModel.js');
const couponModel = require('../models/couponModel.js');
const orderModel = require('../models/orderModel.js');
const uniquid = require("uniqid")
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
        return res.status(500).send({
            success : true,
            message : 'please create new user, Invalid' // nếu tìm thấy có tồn tại 
        })
    }
})

// login admin
const loginAdmin = asyncHandle(async(req,res)=>{
    const {email,password} = req.body
    
    const findAdmin = await userModel.findOne({email})
    if(findAdmin.role !=='admin'){
        return res.status(500).send({
            success : false,
            message : 'not authorised' // nếu tìm thấy có tồn tại 
        })
    }
    if(findAdmin && (await findAdmin.isPasswordMatched(password))){
        const refreshToken = await genarateRefreshToken(findAdmin?._id)
        const updateUser = await userModel.findByIdAndUpdate(findAdmin?._id,{
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
            _id : findAdmin?._id,
            firstname : findAdmin?.firstname,
            lastname : findAdmin?.lastname,
            email : findAdmin?.email,
            role : findAdmin?.role,
            token : genarateToken(findAdmin?._id), // hiển thị ra token
        })
    }else{
        return res.status(500).send({
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
    jwt.verify(refreshToken,"SECRET",(err,decoded)=>{
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

const updatePassword = asyncHandle(async(req,res)=>{
    const {_id} = req.user
    const password = req.body.password
    validateMongooseDbId(_id)
    const user = await userModel.findById(_id)
    console.log(password)
    if (password) {
        user.password = password;
        const updatedPassword = await user.save();
        res.status(200).send({
            success : true,
            message: "Update password success",
            updatedPassword
        });
      } else {
        res.status(200).send({
            success : true,
            message: "Update password ...",
            user
        });
      }
})


const forgotPasswordToken = asyncHandle(async(req,res)=>{
    const {email}= req.body
    const user = await userModel.findOne({email})
    if(!user){
        res.status(500).send({
            success : true,
            message: "user not fount with this email"
        });
    }
    try {
        const token = await user.createPasswordResetToken()
        await user.save()
        const resetURL =`Hi, please follow this link to reset Your Password. <a href='http://localhost:5000/api/user/forgot-password/${token}'>Click here</a>`
        const data = {
            to:email,
            subject :"Forgot password link",
            htm : resetURL,
            text:"Hey user"
        }
        sendEmail(data)
        res.status(200).send({
            success : true,
            message: "success",
            token
        });
    } catch (error) {
        res.status(500).send({
            success : true,
            message: error,
        });
    }
})

const resetPassword = asyncHandle(async(req,res)=>{
    const { password }= req.body // được gửi ở request
    const {token} = req.params // lây token ở phía trên forgot pass
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex')
    const user = await userModel.findOne({
        passwordResetToken : hashedToken,
        passwordResetExpires : {$gt:Date.now()}
    })
    if(!user){
        res.status(500).send({
            success : true,
            message: "Token expired, please try again later ",
        });
    }
    user.password = password
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined
    await user.save()
    res.status(200).send({
        success : true,
        message: "Token success",
        user
    });
})


const getWishList =asyncHandle(async(req,res)=>{
    const {id} =req.user
    try {
        const findUser = await userModel.findById(id).populate('wishlist')
        res.json(findUser)
    } catch (error) {
        res.status(500).send({
            success : false,
            message: "get wish list false",
            error
        });
    }
})

// save user address
const saveAddress = asyncHandle(async(req,res)=>{
    const {id} = req.user
    try {
        const user = await userModel.findByIdAndUpdate(id,{
            address : req?.body?.address
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

// cart 
const userCart = asyncHandle(async (req, res) => {
    const { cart } = req.body;
    const { _id } = req.user;
    try {
      let products = []; // khởi tạo một mảng rỗng , để tí push object chứa các dữ liệu của người thêm cart
      const user = await userModel.findById(_id);
      // check if user already have product in cart
      const alreadyExistCart = await cartModel.findOne({ orderby: user._id });
      if (alreadyExistCart) {
        // nếu user này đã có thì xóa cái cũ và update lại cái giỏ hàng mới khi người dùng thêm vào
        await cartModel.deleteOne({ _id: alreadyExistCart._id });
      }
      for (let i = 0; i < cart.length; i++) {
        let object = {};// tạo object rỗng để bỏ vào mảng products chứa các data
        object.product = cart[i]._id; //khởi tạo key và value
        object.count = cart[i].count;
        object.color = cart[i].color;
        // tìm kiếm đến id sản phẩm mà người dùng thêm vào
        let getPrice = await productModel.findById(cart[i]._id)
        object.price = getPrice.price; // sau có khởi tạo
        products.push(object); // khởi tạo xong thì push vào bên trong products
      }
      let cartTotal = 0; 
        //   kiểm tra tổng tiền
      for (let i = 0; i < products.length; i++) {
        cartTotal  += products[i].price * products[i].count;
      }
      let newCart = await new cartModel({
        products,
        cartTotal,
        orderby: user?._id,
      }).save();

      res.json({
        newCart
      });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "cart user error !"
        })
    }
});

// get user cart 
const getUserCart = asyncHandle(async(req,res)=>{
    const {_id} = req.user
    try {
        //tìm kiếm id người thêm vào giỏ hàng
        // truy tới và hiển thị ra chi tiết của product
        const cart = await cartModel.findOne({orderby : _id})
            .populate("products.product") 
        res.json(cart)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get cart user error !"
        })
    }
})

//  tìm id login và xóa giỏ hàng để trống 
const emptyCart = asyncHandle(async(req,res)=>{
    const {_id} = req.user
    try {
        //tìm kiếm id mà người dùng login 
        const user = await userModel.findOne({_id})

        const cart = await cartModel.findOneAndDelete({orderby : user._id})
        res.json(cart)

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "emptyCart user error !"
        })
    }
})


/////
const applyCoupon = asyncHandle(async(req,res)=>{
    const {coupon} = req.body 
    const {_id}=req.user
    const validCoupon = await couponModel.findOne({name : coupon})
    console.log(validCoupon)
    if(validCoupon == null){
        return res.status(500).send({
            success : false,
            message : "Invalid coupon !"
        })
    }
    const user = await userModel.findOne({_id})
    let {cartTotal} = await cartModel.findOne({orderby : user._id}).populate("products.product")
    let totalAfterDiscount = (cartTotal - (cartTotal * validCoupon.discount)/100).toFixed(2)
    await cartModel.findOneAndUpdate({orderby : user._id},{totalAfterDiscount},{new : true})
    res.json(totalAfterDiscount)
})

const createOrder = asyncHandle(async(req,res)=>{
    const {COD,couponApplied} = req.body
    const {_id} = req.user
    if(!COD){
        return res.status(500).send({
            success : false,
            message : "Create cash order failed !"
        })
    }
    try {
        const user = await userModel.findById(_id)
        let userCart = await cartModel.findOne({orderby:user._id})
        let finalAmout = 0
        if(couponApplied && userCart.totalAfterDiscount){
            finalAmout = userCart.totalAfterDiscount
        }else{
            finalAmout = userCart.cartTotal
        }
        let newOrder = await new orderModel({
            products : userCart.products,
            paymentIntent : {
                id : uniquid(),
                method : "COD",
                amount : finalAmout,
                status : "Cash on Delivery",
                created : Date.now(),
                currency : "usd"
            },
            orderby : user._id,
            orderStatus : "Cash on Delivery"
        }).save()
        let update = userCart.products.map((item)=>{
            return {
                updateOne :{
                    filter : {_id:item.product._id},
                    update : {$inc:{quantity: item.count,sold : +item.count}}
                }
            }
        })
        const updated = await productModel.bulkWrite(update,{})
        res.json({message : "success"})

    } catch (error) {
        return res.status(500).send({
            success : false,
            message : "Create cash order failed !"
        })
    }
})


const getOrders = asyncHandle(async(req,res)=>{
    const {_id} = req.user
    try {
        const userorders = await orderModel.findOne({orderby : _id}).populate("products.product").exec()
        res.json(userorders)
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success : false,
            message : "get order failed !",
            error
        })
    }
})


//  cập nhật lại trạng thái của order
const updateOrderStatus = asyncHandle(async(req,res)=>{
    const {status} = req.body // nhập từ form 
    const {id}=req.params  // nhận được từ id của bảng order 
    try {
        const updateOrderStatus = await orderModel.findByIdAndUpdate(id, // tìm tới id và cập nhật lại trạng thái của order
            {orderStatus:status,
                paymentIntent : {
                    status : status
                }
            },{new:true})
        res.json(updateOrderStatus)
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success : false,
            message : "get order failed !",
            error
        })
    }
})



module.exports = {createUser,loginUser,getAllUsers,getsignUser,deletesignUser
    ,updateUser,blockUser,unblockUser,handleRefreshToken,logout,updatePassword,
    forgotPasswordToken,resetPassword,loginAdmin,getWishList,saveAddress,userCart,
    getUserCart,emptyCart,applyCoupon,createOrder,getOrders,updateOrderStatus}