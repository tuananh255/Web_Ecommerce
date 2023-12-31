const express = require('express')
const router = express.Router()
const {createUser,loginUser,getAllUsers,getsignUser,deletesignUser,updateUser,
     blockUser, unblockUser, handleRefreshToken, logout, updatePassword, 
     forgotPasswordToken, resetPassword, loginAdmin, getWishList, saveAddress, userCart,
     getUserCart, emptyCart, applyCoupon, createOrder, getOrders, updateOrderStatus} = require('../controllers/userController.js')
const {authMiddleware,isAdmin} = require('../middlewares/authMiddleware.js')

router.post('/register',createUser)
router.post('/login',loginUser)
router.post('/admin-login',loginAdmin)
router.post('/forgot-password-token',forgotPasswordToken)
// cart
router.post('/cart',authMiddleware,userCart)
router.post('/cart/applycounpon',authMiddleware,applyCoupon)

router.post('/cart/cash-order',authMiddleware,createOrder)

router.get('/get-wishlist',authMiddleware,getWishList)

router.get('/get-cart',authMiddleware,getUserCart)



router.put('/reset-password/:token',resetPassword)
router.get('/all-user',getAllUsers)
router.get('/get-user/:_id',authMiddleware,isAdmin, getsignUser)
router.get("/refresh", handleRefreshToken);

router.get("/logout", logout);

router.get('/get-orders',authMiddleware,getOrders)
router.put('/order/update-order/:id',authMiddleware,isAdmin,updateOrderStatus)

router.put('/password',authMiddleware,updatePassword)
router.put('/edit-user',authMiddleware ,updateUser)
router.put('/save-address',authMiddleware,saveAddress)
router.put("/block-user/:id",authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.delete('/delete-user/:_id',deletesignUser)
router.delete('/empty-cart',authMiddleware , emptyCart)

module.exports = router
