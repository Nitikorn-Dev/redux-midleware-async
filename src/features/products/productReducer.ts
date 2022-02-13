import { actionTypes } from './action-types';
import {Product,setproductActionTypes,selectedActionTypes,removeSelectedActionType} from './type';

type ProductActionType = setproductActionTypes;

type SelectProductActionType = selectedActionTypes | removeSelectedActionType;

interface productState {
products:Product[]
}

const initialState:productState = {
    products:[]
}


export const productReducer = (state = initialState,{type,payload}:ProductActionType)=> {
    // console.log('reducer',payload)
    switch(type){
        case actionTypes.SET_PRODUCTS:{
            return {...state,products:payload};
        }
        default:{
            return state;
        }
    }
}

type OptionalType<T> = {
    [P in keyof T]?:T[P]
}
interface productSelectState {
    product:OptionalType<Product>
}

const initialDetailState:productSelectState = {
    product:{}
}

export const selectProductReducer = (state:productSelectState = initialDetailState,action:SelectProductActionType)=> {
    switch(action.type) {
        case actionTypes.SELECTED_PRODUCT:{
            return {...state,product:action.payload}
        }        
        case actionTypes.REMOVE_SELECTED_PRODUCT:{
            return initialDetailState;
        }
        default:{
            return state;
        }
    }
}