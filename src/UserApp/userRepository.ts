import { Prisma } from "@prisma/client";
import client from "../client/prismaClient";
import { IUser, ICreateUser } from './types';

async function findUserByEmail(email: string): Promise<IUser | null> {
    try {
        const user = await client.user.findUnique({
            where: {
                email: email
            }
        });
        return user;
    } catch (error) {
        console.error('Error finding user by email:', error);
        throw new Error('Error finding user by email');
    }
}

async function createUser(data: ICreateUser): Promise<IUser> {
    try {
        const user = await client.user.create({
            data: data
        });
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Error creating user');
    }
}

const userRepository = {
    findUserByEmail,
    createUser,
};

export default userRepository;
