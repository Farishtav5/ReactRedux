import { BUY_ICE_CREAMS } from "./iceCreamTypes"

const initialState = {
    noOfIceCreams: 5
}

export const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAMS: 
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams - 1
            }
        default: return state
    }
}