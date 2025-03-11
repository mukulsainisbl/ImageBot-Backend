import {registerUser , loginUser, userCredits, paymentRazorpay, verifyRazorPay} from '../controller/userController.js'
import express from 'express'
import userAuth from '../middleware/auth.js'

const userRouter = express.Router()

userRouter.post('/register' , registerUser)
userRouter.post('/login' , loginUser)
userRouter.get('/credits' , userAuth, userCredits)
userRouter.post('/payment' , userAuth , paymentRazorpay)
userRouter.post('/verify-razor' , userAuth , verifyRazorPay)

export default userRouter

