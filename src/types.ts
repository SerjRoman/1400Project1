export interface Product {
    id: number;
    name: string;
    price: number;
    categoryId: number;
}

export interface CreateProduct {
    name: string;
    price: number;
    categoryId: number;
}

export interface UpdateProduct {
    name?: string;
    price?: number;
    categoryId?: number;
}
