import { actionTypes } from "./action-types";

import {setproductActionTypes,selectedActionTypes,removeSelectedActionType, Product} from './type';



export const setProducts = (products:Product[]):setproductActionTypes=> {
        // console.log("Action :",products)
    return {
        type:actionTypes.SET_PRODUCTS,
        payload:products
    }
}


export const selectedProduct = (
product:Product):selectedActionTypes=> {
    return {
        type:actionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct = ():removeSelectedActionType=> {
    return {
        type:actionTypes.REMOVE_SELECTED_PRODUCT
    }
}