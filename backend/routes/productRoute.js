const express = require('express')
const { createProduct, getaProduct, getAllProduct, updateProduct, deleteProduct } = require('../controllers/productController')
const { isAdmin,authMiddleware} = require('../middlewares/authMiddleware')
const route = express.Router()

route.post('/create-product',authMiddleware,isAdmin,createProduct)
route.get('/get-product/:_id',getaProduct)
route.get('/getall-product',getAllProduct)
route.put('/update-product/:_id',authMiddleware,isAdmin,updateProduct)
route.delete('/delete-product/:_id',authMiddleware,isAdmin,deleteProduct)

module.exports = route