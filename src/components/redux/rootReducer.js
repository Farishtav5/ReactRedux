import { combineReducers } from "redux";

import {cakeReducer} from "./cake/cakeReducers"
import { iceCreamReducer } from "./iceCreams/iceCreamReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})