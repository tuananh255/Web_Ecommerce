const express = require('express')
const { CreateBlogCategory,deleteBlogCategory,getAllBlogCategory,getBlogCategory,updateBlogCategory } = require('../controllers/blogCatController')
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')
const route = express.Router()

route.post('/create-blogcategory',authMiddleware,isAdmin,CreateBlogCategory)
route.get('/get-blogcategory/:id',getBlogCategory)
route.get('/get-all-blogcategory',getAllBlogCategory)
route.put('/update-blogcategory/:id',authMiddleware,isAdmin,updateBlogCategory)
route.delete('/delete-blogcategory/:id',authMiddleware,isAdmin,deleteBlogCategory)


module.exports = route