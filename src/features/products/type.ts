import { actionTypes } from "./action-types";

export interface Product {
    id:number;
    title:string;
    price:number;
    category:string;
    description:string;
    image:string;
}

export interface setproductActionTypes {
    type:typeof actionTypes.SET_PRODUCTS;
    payload:Product[];
}

export interface selectedActionTypes {
    type:typeof actionTypes.SELECTED_PRODUCT;
    payload:Product;
}

type OptionalType<T> = {
    [P in keyof T]?:T[P]
}
export interface removeSelectedActionType {
    type:typeof actionTypes.REMOVE_SELECTED_PRODUCT;
    // payload:OptionalType<Product>;
}