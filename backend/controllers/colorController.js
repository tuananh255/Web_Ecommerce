const ColorModel = require('../models/colorModel.js')
const asyncHandle = require('express-async-handler')

const CreateColor = asyncHandle(async(req,res)=>{
    try {
        const newColor = await ColorModel.create(req.body)
        newColor.save()
        res.status(200).send({
            success : true,
            message : "Create Color successfully",
            newColor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "create Color false!"
        })
    }
})

const getColor = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const getColor = await ColorModel.findById(id)
        res.status(200).send({
            success : true,
            message : "get Color successfully",
            getColor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get Color false!"
        })
    }
})

const getAllColor = asyncHandle(async(req,res)=>{
    try {
        const getColor = await ColorModel.find()
        res.status(200).send({
            success : true,
            message : "get all Color successfully",
            getColor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get all Color false!"
        })
    }
})

const updateColor = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const udColor = await ColorModel.findByIdAndUpdate(id,req.body,{new :true})
        res.status(200).send({
            success : true,
            message : "update Color successfully",
            udColor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "update Color false!"
        })
    }
})


const deleteColor = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const delColor = await ColorModel.findByIdAndDelete(id)
        res.status(200).send({
            success : true,
            message : "delete Color successfully",
            delColor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "delete Color false!"
        })
    }
})

module.exports = {CreateColor,getAllColor,getColor,updateColor,deleteColor}