export interface Product {
    id: number;
    name: string;
    price: number;
    categoryId: number;
}

export interface CreateProductDTO {
    name: string;
    price: number;
    categoryId: number;
}

export interface UpdateProductDTO {
    name?: string;
    price?: number;
    categoryId?: number;
}
