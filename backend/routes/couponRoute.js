const express =require('express')
const { createCoupon, getAllCoupons, updateCoupon, deleteCoupon } = require('../controllers/couponController')
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware')
const route = express.Router()
// 6:32
route.post('/create-coupon',authMiddleware,isAdmin,createCoupon)
route.get('/get-all-coupon',authMiddleware,isAdmin,getAllCoupons)
route.put('/update-coupon/:id',authMiddleware,isAdmin,updateCoupon)
route.delete('/delete-coupon/:id',authMiddleware,isAdmin,deleteCoupon)

module.exports = route