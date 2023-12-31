const express = require('express')
const { createBlog, updateBlog, getBlog, getAllBlog, deleteBlog, likeBlog, disliketheBlog, uploadImages } = require('../controllers/blogController')
const {authMiddleware,isAdmin} =require('../middlewares/authMiddleware')
const { uploadPhoto, blogImgResize } = require('../middlewares/uploadImg')
const route = express.Router()

route.post('/create-blog',authMiddleware,isAdmin,createBlog)

route.put(
    "/upload/:id",
    authMiddleware,
    isAdmin,
    uploadPhoto.array("images", 2),
    blogImgResize,
    uploadImages
  );

route.put('/likes',authMiddleware,isAdmin,likeBlog)
route.put('/dislikes',authMiddleware,isAdmin,disliketheBlog)
route.put('/update-blog/:id',authMiddleware,isAdmin,updateBlog)

route.get('/get-blog/:id',getBlog)
route.get('/get-all-blog',getAllBlog)


route.delete('/del-blog/:id',authMiddleware,isAdmin,deleteBlog)
module.exports = route