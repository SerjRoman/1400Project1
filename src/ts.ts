import { Product } from "./ProductApp/types"

type NazvanieTipa = number | string
type HoroshiyStatus = 'success' | 'super error'
type User = {name: string, id: number, status: HoroshiyStatus} 

interface IUser{
    name: string
    id: number
    status: HoroshiyStatus
}

let count: NazvanieTipa = 'stroka'

export interface IResponse<T> {
    status: string;
    data?: T;
    message?: string;
}

export type IProductResponse = IResponse<Product>;
export type IProductsResponse = IResponse<Product[]>;
