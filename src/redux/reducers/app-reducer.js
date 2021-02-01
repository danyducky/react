import {getAuthStatusThunk} from "./auth-reducer";

const initialState = {
    init: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'initCompleted':
            return {
                ...state,
                init: true
            }
        default:
            return state
    }
}


export const initCompleted = () => {
    return {
        type: 'initCompleted'
    }
}

export const beginInit = () => (dispatch) => {
    dispatch(getAuthStatusThunk())
        .then( () => {
            dispatch(initCompleted())
        })
}

export default appReducer;