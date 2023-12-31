const BlogModel = require('../models/blogModel.js')
const userModel = require('../models/userModel.js')
const asyncHandle = require('express-async-handler')
const validateMongooseDbId = require('../utils/validateMongoose.js')
const cloudinaryUploadImg = require('../utils/cloudinaly.js')
const fs = require("fs");
const createBlog = asyncHandle(async(req,res)=>{
    try {
        const newBlog = await BlogModel.create(req.body) 
        res.status(200).send({
            success : true,
            message : "create blog success !",
            newBlog
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "create blog false!"
        })
    }
})
const updateBlog = asyncHandle(async(req,res)=>{
    const {id}=req.params
    try {
        const upBlog = await BlogModel.findByIdAndUpdate(id,req.body,{new:true}) 
        res.status(200).send({
            success : true,
            message : "updateBlog blog success !",
            upBlog
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "updateBlog blog false!"
        })
    }
})
const getBlog = asyncHandle(async(req,res)=>{
    const{id} = req.params
    try {
        const upBlog = await BlogModel.findById(id).populate('likes').populate('dislikes') // hiển thị rõ like và dislike
        const updateViews = await BlogModel.findByIdAndUpdate(
            id,{
                $inc : {numViews:1}, // lượt xem sản phẩm
            },{new :true}
        )
        res.status(200).send({
            success : true,
            message : "getBlog blog success !",
            upBlog,
            updateViews
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "getBlog blog false!"
        })
    }
})

const getAllBlog = asyncHandle(async(req,res)=>{
    try {
        const getBlog = await BlogModel.find().populate('likes').populate('dislikes') 
        
        res.status(200).send({
            success : true,
            message : "get all Blog success !",
            getBlog
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get all Blog false!"
        })
    }
})

const deleteBlog = asyncHandle(async(req,res)=>{
    const{id} = req.params
    validateMongooseDbId(id)
    try {
        const delBlog = await BlogModel.findByIdAndDelete(id) 
        
        res.status(200).send({
            success : true,
            message : "del Blog success !",
            delBlog
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "del Blog  false!"
        })
    }
})

const likeBlog = asyncHandle(async(req,res)=>{
    const {blogId} = req.body
    validateMongooseDbId(blogId)
    // find blog which you want to liked
    const blog = await BlogModel.findById(blogId)
    //  find login user
    const loginUserId = req?.user?._id
    // find if the user has liked the post
    const isLiked = blog?.isLiked
    //find if the user has dislike
    const alreadyDisLiked = blog?.dislikes?.find((userId) => userId?.toString()===loginUserId?.toString())
    if(alreadyDisLiked){
        const blog = await BlogModel.findByIdAndUpdate(blogId,{
            $pull:{dislikes:loginUserId},
            isDisliked:false
        },{new :true})
        res.json(blog)
    } 
    if(isLiked){ // nếu thả tym rồi 
        const blog = await BlogModel.findByIdAndUpdate(blogId,{
            $pull:{likes:loginUserId},
            isLiked:false
        },{new :true})
        res.json(blog)
    }else{ // nếu chưa thả
        const blog = await BlogModel.findByIdAndUpdate(blogId,{
            $push:{likes:loginUserId}, // lấy được địa chỉ của người nào like
            isLiked:true
        },{new :true})
        res.json(blog)
    }
})

const disliketheBlog = asyncHandle(async (req, res) => {
    const { blogId } = req.body;
    // Find the blog which you want to be liked
    const blog = await BlogModel.findById(blogId);
    // find the login user
    const loginUserId = req?.user?._id;
    // find if the user has liked the blog
    const isDisLiked = blog?.isDisliked;
    // find if the user has disliked the blog
    const alreadyLiked = blog?.likes?.find(
      (userId) => userId?.toString() === loginUserId?.toString()
    );
    if (alreadyLiked) {
      const blog = await BlogModel.findByIdAndUpdate(
        blogId,
        {
          $pull: { likes: loginUserId },
          isLiked: false,
        },
        { new: true }
      );
      res.json(blog);
    }
    if (isDisLiked) {
      const blog = await BlogModel.findByIdAndUpdate(
        blogId,
        {
          $pull: { dislikes: loginUserId },
          isDisliked: false,
        },
        { new: true }
      );
      res.json(blog);
    } else {
      const blog = await BlogModel.findByIdAndUpdate(
        blogId,
        {
          $push: { dislikes: loginUserId },
          isDisliked: true,
        },
        { new: true }
      );
      res.json(blog);
    }
  });


  const uploadImages = asyncHandle(async (req, res) => {
    const { id } = req.params;
    try {
      const uploader = (path) => cloudinaryUploadImg(path, "images");
      const urls = [];
      const files = req.files;
      for (const file of files) {
        const { path } = file;
        const newpath = await uploader(path);
        console.log(newpath);
        urls.push(newpath);
        fs.unlinkSync(path);
      }
      const findBlog = await BlogModel.findByIdAndUpdate(
        id,
        {
          images: urls.map((file) => {
            return file;
          }),
        },
        {
          new: true,
        }
      );
      res.json(findBlog);
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "upload Blog  false!"
        })
    }
  });

module.exports = {createBlog,updateBlog,getBlog,getAllBlog,deleteBlog,likeBlog,disliketheBlog,uploadImages}