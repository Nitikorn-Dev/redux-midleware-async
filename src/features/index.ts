import { combineReducers } from "redux";
import {fetchStateReducer, productReducer,selectProductReducer} from "./products/productReducer";

const reducers =  combineReducers({
    allProducs:productReducer,
    selectProduct:selectProductReducer,
    fetchState:fetchStateReducer
});
export default reducers;