import { actionTypes } from "./action-types";
import fakeStoreApi from "../../apis/fakeStoreApi";

import {
  setproductActionTypes,
  removeSelectedActionType,
  Product,
} from "./type";

export const fetchProducts = () => async (dispatch: any) => {
  dispatch({ type: actionTypes.FETCHREQUEST });
  try {
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: actionTypes.FETCHTSUCESS });
    dispatch({ type: actionTypes.SET_PRODUCTS, payload: response.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCHTFAILURE, payload: error });
  }
};

export const setProducts = (products: Product[]): setproductActionTypes => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const fetchProduct = (id: any) => async (dispatch: any) => {
    dispatch({ type: actionTypes.FETCHREQUEST });
  try {
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({ type: actionTypes.FETCHTSUCESS });
    dispatch({ type: actionTypes.SELECTED_PRODUCT, payload: response.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCHTFAILURE, payload: error });
  }
};

export const removeSelectedProduct = (): removeSelectedActionType => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
