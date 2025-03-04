import { authTokenMiddleware } from '../middlewares/AuthTokenMiddleware';
import userControllersApi from './userControllerApi';
import {Router} from 'express';

const router = Router();

router.post('/login', userControllersApi.authUser)
router.post('/register', userControllersApi.registerUser)

router.get("/me", authTokenMiddleware, userControllersApi.getUserById)

export default router;