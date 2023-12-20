const CategoryModel = require('../models/productCategoryModel.js')
const asyncHandle = require('express-async-handler')
const validateMongooseDbId = require('../utils/validateMongoose.js')

const productCreateCategory = asyncHandle(async(req,res)=>{
    try {
        const newCategory = await CategoryModel.create(req.body)
        newCategory.save()
        res.status(200).send({
            success : true,
            message : "Create category successfully",
            newCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "create category false!"
        })
    }
})

const getCategory = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const getCategory = await CategoryModel.findById(id)
        res.status(200).send({
            success : true,
            message : "get category successfully",
            getCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get category false!"
        })
    }
})

const getAllCategory = asyncHandle(async(req,res)=>{
    try {
        const getCategory = await CategoryModel.find()
        res.status(200).send({
            success : true,
            message : "get all category successfully",
            getCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get all category false!"
        })
    }
})

const updateCategory = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const udCategory = await CategoryModel.findByIdAndUpdate(id,req.body,{new :true})
        res.status(200).send({
            success : true,
            message : "update category successfully",
            udCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "update category false!"
        })
    }
})


const deleteCategory = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const delCategory = await CategoryModel.findByIdAndDelete(id)
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

module.exports = {productCreateCategory,updateCategory,deleteCategory,getCategory,getAllCategory}