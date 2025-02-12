import { Request, Response } from 'express';
import userService from './UserService';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

async function registerUser(req: Request, res: Response) {
    const data = req.body;
    const result = await userService.registerUser(data);
    if (result.status === 'error') {
        res.status(400).send(result.message);
        return;
    }
    const token = sign(result.data, SECRET_KEY, { expiresIn: '1h' });
    res.cookie('token', token);
    res.sendStatus(200);
}

const userController = {
    registerUser,
};

export default userController;
