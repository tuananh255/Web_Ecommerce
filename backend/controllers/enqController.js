const EnqModel = require('../models/enqModel.js')
const asyncHandle = require('express-async-handler')

const CreateEnq = asyncHandle(async(req,res)=>{
    try {
        const newEnq = await EnqModel.create(req.body)
        newEnq.save()
        res.status(200).send({
            success : true,
            message : "Create Enq successfully",
            newEnq
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "create Enq false!"
        })
    }
})

const getEnq = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const getEnq = await EnqModel.findById(id)
        res.status(200).send({
            success : true,
            message : "get Enq successfully",
            getEnq
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get Enq false!"
        })
    }
})

const getAllEnq = asyncHandle(async(req,res)=>{
    try {
        const getEnq = await EnqModel.find()
        res.status(200).send({
            success : true,
            message : "get all Enq successfully",
            getEnq
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get all Enq false!"
        })
    }
})

const updateEnq = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const udEnq = await EnqModel.findByIdAndUpdate(id,req.body,{new :true})
        res.status(200).send({
            success : true,
            message : "update Enq successfully",
            udEnq
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "update Enq false!"
        })
    }
})


const deleteEnq = asyncHandle(async(req,res)=>{
    const {id}= req.params
    try {
        const delEnq = await EnqModel.findByIdAndDelete(id)
        res.status(200).send({
            success : true,
            message : "delete Enq successfully",
            delEnq
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "delete Enq false!"
        })
    }
})

module.exports = {CreateEnq,getAllEnq,getEnq,updateEnq,deleteEnq}