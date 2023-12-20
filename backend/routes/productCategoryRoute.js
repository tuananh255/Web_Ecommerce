const express = require('express')
const { productCreateCategory, updateCategory, deleteCategory, getCategory, getAllCategory } = require('../controllers/productCategoryController')
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')
const route = express.Router()

route.post('/create-category',authMiddleware,isAdmin,productCreateCategory)
route.get('/get-category/:id',getCategory)
route.get('/get-all-category',getAllCategory)
route.put('/update-category/:id',authMiddleware,isAdmin,updateCategory)
route.delete('/delete-category/:id',authMiddleware,isAdmin,deleteCategory)


module.exports = route