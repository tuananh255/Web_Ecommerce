const express = require('express')
const { createProduct } = require('../controllers/productController')
const route = express.Router()

route.post('/create-product',createProduct)

module.exports = route