import express from 'express';
import { isAdmin,requireSignIn } from '../middlewares/authMiddlewares.js';
import { categoryControlller, CreateCategoryController, deleteCategoryCOntroller, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';

const router=express.Router()

//routes
//create category
router.post('/create-category',requireSignIn,isAdmin,CreateCategoryController)

// update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)

//getAll category
router.get('/get-category',categoryControlller)

//single category
router.get('/single-category/:slug',singleCategoryController)

//delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryCOntroller)

export default router;