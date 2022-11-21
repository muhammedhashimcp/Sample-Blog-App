import express from 'express';
import { getAllUser, login, signup } from '../controllers/user-controller.js';
console.log("🚀 ~ file: user-routes.js ~ line 3 ~ signup", signup)

const router = express.Router();
 
router.get('/', getAllUser); 
router.post('/signup', signup);
router.post('/login', login);  
export default router; 
