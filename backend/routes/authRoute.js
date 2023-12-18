const express = require('express')
const router = express.Router()
const {createUser,loginUser,getAllUsers,getsignUser,deletesignUser,updateUser,
     blockUser, unblockUser, handleRefreshToken, logout, updatePassword, 
     forgotPasswordToken, resetPassword} = require('../controllers/userController.js')
const {authMiddleware,isAdmin} = require('../middlewares/authMiddleware.js')

router.post('/register',createUser)
router.post('/login',loginUser)
router.post('/forgot-password-token',forgotPasswordToken)
router.put('/reset-password/:token',resetPassword)

router.get('/all-user',getAllUsers)
router.get('/get-user/:_id',authMiddleware,isAdmin, getsignUser)
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.put('/password',authMiddleware,updatePassword)
router.put('/edit-user',authMiddleware ,updateUser)
router.put("/block-user/:id",authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.delete('/delete-user/:_id',deletesignUser)

module.exports = router
