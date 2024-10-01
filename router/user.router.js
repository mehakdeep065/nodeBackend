const express = require('express')
const authMiddleware = require('../middleware/authMiddleware');
const userRouter = express.Router();
const {userSignup , userlogin} =require('../controller/user.controler')
userRouter.post("/signup",userSignup)
userRouter.post("/login",userlogin)

userRouter.get('/getdata',authMiddleware, (req,res)=>{
    res.send(' hello world'+userId);
})
// userRouter.get('/getdata',userlogin)
module.exports = userRouter;