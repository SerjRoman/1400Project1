export interface IProduct {
    id: number;
    name: string;
    price: number;
    categoryId: number;
}

export interface ICreateProduct {
    name: string;
    price: number;
    categoryId: number;
}

export interface IUpdateProduct {
    name?: string;
    price?: number;
    categoryId?: number;
}
export interface IUser {
    id: number;
    email: string;
    password: string;
}

export interface ICreateUser {
    email: string;
    password: string;
}

export interface IUserResponse {
    status: string;
    data?: User;
    message?: string;
}
