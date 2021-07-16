import { combineReducers } from "redux";

import counter from "redux/slices/counter";

import {store} from "./store"

const rootReducer = combineReducers({ counter });

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;
