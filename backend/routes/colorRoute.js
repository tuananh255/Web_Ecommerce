const express = require('express')
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')
const { CreateColor, getColor, getAllColor, updateColor, deleteColor } = require('../controllers/colorController')
const route = express.Router()

route.post('/create-color',authMiddleware,isAdmin,CreateColor)
route.get('/get-color/:id',getColor)
route.get('/get-all-color',getAllColor)
route.put('/update-color/:id',authMiddleware,isAdmin,updateColor)
route.delete('/delete-color/:id',authMiddleware,isAdmin,deleteColor)


module.exports = route