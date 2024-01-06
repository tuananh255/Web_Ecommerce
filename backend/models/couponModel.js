
const mongoose = require('mongoose'); // Erase if already required

// phiếu mua hàng
var couponSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        unescape : true
    },
    expiry:{
        type:Date,
        required:true,
    },
    discount:{
        type:Number,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Coupon', couponSchema);