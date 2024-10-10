import express from 'express'
import {registerController,loginController,testController,forgotPasswordController, UpdateProfileController, getordersController, getAllOrdersController, orderStatusController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js';

// router object
const router=express.Router();

//routing
//Register  || METHOD POST
router.post('/register',registerController)

//LOGIN   ||POST
router.post('/login',loginController)

//Forgot Password  || POST
router.post('/forgot-password',forgotPasswordController)

//test routes
router.get("/test", requireSignIn,isAdmin,  testController);

//protected user route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})

//protected admin route auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})

// update profile
router.put('/profile',requireSignIn,UpdateProfileController)

// orders
router.get('/orders',requireSignIn,getordersController)

// all order
router.get('/all-orders',requireSignIn,isAdmin,getAllOrdersController)

// order status update
router.put('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController)

export default router;