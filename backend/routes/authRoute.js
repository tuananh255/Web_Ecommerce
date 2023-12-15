const express = require('express')
const router = express.Router()
const {createUser,loginUser,getAllUsers,getsignUser,deletesignUser,updateUser} = require('../controllers/userController.js')
const {authMiddleware,isAdmin} = require('../middlewares/authMiddleware.js')

router.post('/register',createUser)
router.post('/login',loginUser)
router.get('/all-user',getAllUsers)
router.get('/get-user/:_id',getsignUser)
router.put('/updated-user/:_id',updateUser)
router.delete('/delete-user/:_id',deletesignUser)

module.exports = router
