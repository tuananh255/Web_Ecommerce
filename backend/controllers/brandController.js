const BrandModel = require('../models/brandModel.js')
const asyncHandle = require('express-async-handler')
const validateMongooseDbId = require('../utils/validateMongoose.js')

const CreateBrand = asyncHandle(async(req,res)=>{
    try {
        const newBrand = await BrandModel.create(req.body)
        newBrand.save()
        res.status(200).send({
            success : true,
            message : "Create brand successfully",
            newBrand
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "create brand false!"
        })
    }
})

const getBrand = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const getBrand = await BrandModel.findById(id)
        res.status(200).send({
            success : true,
            message : "get Brand successfully",
            getBrand
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get brand false!"
        })
    }
})

const getAllBrand = asyncHandle(async(req,res)=>{
    try {
        const getBrand = await BrandModel.find()
        res.status(200).send({
            success : true,
            message : "get all Brand successfully",
            getBrand
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get all Brand false!"
        })
    }
})

const updateBrand = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const udBrand = await BrandModel.findByIdAndUpdate(id,req.body,{new :true})
        res.status(200).send({
            success : true,
            message : "update Brand successfully",
            udBrand
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "update Brand false!"
        })
    }
})


const deleteBrand = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const delBrand = await BrandModel.findByIdAndDelete(id)
        res.status(200).send({
            success : true,
            message : "delete Brand successfully",
            delBrand
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "delete Brand false!"
        })
    }
})

module.exports = {CreateBrand,getAllBrand,getBrand,updateBrand,deleteBrand}