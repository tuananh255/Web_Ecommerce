const express = require('express')
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware')
const { CreateEnq, getEnq, getAllEnq, updateEnq, deleteEnq } = require('../controllers/enqController')
const route = express.Router()

route.post('/create-enq',CreateEnq)
route.get('/get-enq/:id',getEnq)
route.get('/get-all-enq',getAllEnq)
route.put('/update-enq/:id',authMiddleware,isAdmin,updateEnq)
route.delete('/delete-enq/:id',authMiddleware,isAdmin,deleteEnq)


module.exports = route