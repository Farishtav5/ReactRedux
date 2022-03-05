import { createStore } from "redux"
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST } from "./userTypes"

const initialState = {
    users: [],
    errorMsg: "",
    loader: false
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loader: true
            }
        case FETCH_USERS_SUCCESS:
            debugger
            return {
                ...state,
                loader: false,
                users: action.payload,
                errorMsg: ""
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loader: false,
                users: [],
                errorMsg: action.payload
            }
        default:
            return state
    }
}