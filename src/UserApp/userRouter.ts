import { Router } from 'express';
import userController from './UserController';

const router = Router();

router.post('/register', userController.registerUser);

export default router;
