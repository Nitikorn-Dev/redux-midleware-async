import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import logger from "redux-logger";
import reducers from "../features";
import thunk from "redux-thunk";

const store = createStore(reducers,{},composeWithDevTools(applyMiddleware(thunk,logger)));
export default store;
export type RootState = ReturnType<typeof store['getState']>;
export type RootDispatch = typeof store['dispatch'];
