import usersAPI from "../DAL/dal";


const initialState = {
    users: [],
    totalCount: 1,
    currentPage: 1,
    pageSize: 10,
    isLoading: true,
}

const allUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setUsers':
            return {
                ...state,
                users: action.users // users: [...state.users, ...action.users]
            }
        case 'follow':
            return {
                ...state,
                users: state.users.map( (el) => {
                    if (el.id === action.id) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case 'unfollow':
            return {
                ...state,
                users: state.users.map( (el) => {
                    if (el.id === action.id) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case 'setTotalCount':
            return {
                ...state,
                totalCount: action.count
            }
        case 'setCurrentPage':
            return {
                ...state,
                currentPage: action.page
            }
        case 'setLoadStatus':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}




export const setUsersAction = (users) => {
    return {
        type: 'setUsers',
        users: users
    }
}

export const followAction = (userId) => {
    return {
        type: 'follow',
        id: userId
    }
}

export const unfollowAction = (userId) => {
    return {
        type: 'unfollow',
        id: userId
    }
}

export const setTotalCountAction = (count) => {
    return {
        type: 'setTotalCount',
        count: count
    }
}

export const setCurrentPageAction = (page) => {
    return {
        type: 'setCurrentPage',
        page: page
    }
}

export const setLoadStatusAction = (isLoading) => {
    return {
        type: 'setLoadStatus',
        isLoading: isLoading
    }
}

export const getUsersThunk = (pageSize, currentPage) => (dispatch) =>
    {
        dispatch(setLoadStatusAction(true))
        usersAPI.getUsers(pageSize, currentPage)
            .then( (response) => {
                dispatch(setLoadStatusAction(false))
                dispatch(setUsersAction(response.data.items))
                dispatch(setTotalCountAction(response.data.totalCount))
            })
    }



export default allUsersReducer;