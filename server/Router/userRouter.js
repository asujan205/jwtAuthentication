 import {RegisterUser,
    Auth ,
    getUser
    //  verifyToken,
    //  UpdateUser
    } from '../controller/userController.js'
import express from 'express'
const router=express.Router()
router.post('/register',RegisterUser);
router.post('/auth',Auth);
 router.get('/getuser',getUser);
// router.post('/update',UpdateUser);
export default router