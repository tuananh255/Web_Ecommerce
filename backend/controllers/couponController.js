
const CouponModel = require('../models/couponModel.js')
const asyncHandle = require('express-async-handler')

const createCoupon=asyncHandle(async(req,res)=>{
    try {
        const newCoupon = await CouponModel.create(req.body) // nhận ở request
        res.json(newCoupon)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "create coupon error !"
        })
    }
})
const getAllCoupons=asyncHandle(async(req,res)=>{
    try {
        const Coupons = await CouponModel.find() // nhận ở request
        res.json(Coupons)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get coupon error !"
        })
    }
})
const updateCoupon=asyncHandle(async(req,res)=>{
    const {id}=req.params
    try {
        const UpdateCoupon = await CouponModel.findByIdAndUpdate(id,req.body,{new:true}) // nhận ở request
        res.json(UpdateCoupon)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "get coupon error !"
        })
    }
})
const deleteCoupon=asyncHandle(async(req,res)=>{
    const {id}=req.params
    try {
        const deleteCoupon = await CouponModel.findByIdAndDelete(id) // nhận ở request
        res.json(deleteCoupon)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "delete coupon error !"
        })
    }
})

module.exports = {createCoupon,getAllCoupons,updateCoupon,deleteCoupon}