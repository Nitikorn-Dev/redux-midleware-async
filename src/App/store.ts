import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import logger from "redux-logger";
import reducers from "../features";

const store = createStore(reducers,{},composeWithDevTools(applyMiddleware(logger)));
export default store;
export type RootState = ReturnType<typeof store['getState']>;
export type RootDispatch = typeof store['dispatch'];
