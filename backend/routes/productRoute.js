const express = require('express')
const { createProduct, getaProduct, getAllProduct, updateProduct, 
    deleteProduct, addToWishlist, rating, uploadImages, deleteImages } = 
    require('../controllers/productController')
const { isAdmin,authMiddleware} = require('../middlewares/authMiddleware')
const { uploadPhoto, productImgResize,  } = require('../middlewares/uploadImg')
const { saveAddress } = require('../controllers/userController')
const route = express.Router()

route.post('/create-product',authMiddleware,isAdmin,createProduct)
route.get('/get-product/:_id',getaProduct)
route.get('/getall-product',getAllProduct)
route.put('/rating',authMiddleware,rating)

// upload ảnh 
route.put('/upload',authMiddleware,isAdmin,uploadPhoto.array('images',10),productImgResize,uploadImages)
route.put('/wishlist',authMiddleware,addToWishlist)



route.put('/update-product/:_id',authMiddleware,isAdmin,updateProduct)
route.delete('/delete-product/:_id',authMiddleware,isAdmin,deleteProduct)
route.delete('/delete-image/:id',authMiddleware,isAdmin,deleteImages)

module.exports = route