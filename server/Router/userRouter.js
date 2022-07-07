 import {RegisterUser,
    Auth, 
     verifyToken,
     UpdateUser
    } from '../controller/userController.js'
import express from 'express'
const router=express.Router()
router.post('/register',RegisterUser);
router.post('/auth',Auth);
router.get('/verify',verifyToken);
router.post('/update',UpdateUser);
export default router