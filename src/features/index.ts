import { combineReducers } from "redux";
import {productReducer,selectProductReducer} from "./products/productReducer";

const reducers =  combineReducers({
    allProducs:productReducer,
    selectProduct:selectProductReducer
});
export default reducers;