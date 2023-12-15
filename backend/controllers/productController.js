const ProductModel = require('../models/productModel.js')
const asyncHandle = require('express-async-handler')

const createProduct = asyncHandle(async(req,res)=>{
    try {
        // 2:32
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "create product error !"
        })
    }
})

module.exports = {createProduct }

