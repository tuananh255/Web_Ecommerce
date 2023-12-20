const blogCategoryModel = require('../models/blogCatModel.js')
const asyncHandle = require('express-async-handler')
const validateMongooseDbId = require('../utils/validateMongoose.js')

const CreateBlogCategory = asyncHandle(async(req,res)=>{
    try {
        const newBlogCategory = await blogCategoryModel.create(req.body)
        newBlogCategory.save()
        res.status(200).send({
            success : true,
            message : "Create category successfully",
            newBlogCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "create category false!"
        })
    }
})

const getBlogCategory = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const getbgCategory = await blogCategoryModel.findById(id)
        res.status(200).send({
            success : true,
            message : "get category successfully",
            getbgCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get category false!"
        })
    }
})

const getAllBlogCategory = asyncHandle(async(req,res)=>{
    try {
        const getbgCategory = await blogCategoryModel.find()
        res.status(200).send({
            success : true,
            message : "get all category successfully",
            getbgCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get all category false!"
        })
    }
})

const updateBlogCategory = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const udbgCategory = await blogCategoryModel.findByIdAndUpdate(id,req.body,{new :true})
        res.status(200).send({
            success : true,
            message : "update category successfully",
            udbgCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "update category false!"
        })
    }
})


const deleteBlogCategory = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const delCategory = await blogCategoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success : true,
            message : "delete category successfully",
            delCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "delete category false!"
        })
    }
})

module.exports = {CreateBlogCategory,updateBlogCategory,deleteBlogCategory,getBlogCategory,getAllBlogCategory}