import usersAPI from "../DAL/dal";

const initialState = {
    userData: [],
    isAuthorized: false,
    warningMessage: ''
}



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setUserData':
            return {
                ...state,
                userData: action.userData
            }
        case 'setAuthStatus':
            return {
                ...state,
                isAuthorized: action.isAuthorized
            }
        case 'setWarningMessage':
            return {
                ...state,
                warningMessage: action.warningMessage
            }

        default:
            return state
    }
}




export const setUserDataAction = (userData) => {
    return {
        type: 'setUserData',
        userData: userData
    }
}

export const setAuthStatusAction = (isAuthorized) => {
    return {
        type: 'setAuthStatus',
        isAuthorized: isAuthorized
    }
}

export const setWarningMessageAction = (warningMessage) => {
    return {
        type: 'setWarningMessage',
        warningMessage: warningMessage
    }
}

export const getAuthStatusThunk = () => (dispatch) => {
    return usersAPI.getAuthStatus()
        .then( (response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAction(response.data.data))
                dispatch(setAuthStatusAction(true))
            }
        })
}

export const loginThunk = (values) => (dispatch) => {
    usersAPI.postAuthRequest(values.email, values.password)
        .then( (response) => {
            if (response.data.resultCode === 0) {
                usersAPI.getAuthStatus()
                    .then( (response) => {
                        if (response.data.resultCode === 0) {
                            dispatch(setUserDataAction(response.data.data))
                            dispatch(setAuthStatusAction(true))
                        }
                    })
            }
        })
}

export const logoutThunk = () => (dispatch) => {
    usersAPI.deleteAuthSession()
        .then( (response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAction([]))
                dispatch(setAuthStatusAction(false))
            }
        })
}

export default authReducer;