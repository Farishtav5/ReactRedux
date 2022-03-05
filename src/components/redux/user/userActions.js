import { FETCH_USERS_FAILURE } from "./userTypes"
import { FETCH_USERS_REQUEST } from "./userTypes"
import { FETCH_USERS_SUCCESS } from "./userTypes"
import axios from "axios"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// async action creator, it will return a func
// it's not a pure function
export const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            const data = res.data

            dispatch(fetchUserSuccess(data))
        })
        .catch((err) => {
            const msg = err.message
            dispatch(fetchUserFailure(msg))
        })
        // type: "FETCH_USER_SUCCESS",
        // payload: users
    }
}