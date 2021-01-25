const initialState = {
    userProfile: [],
    newPostText: '',
    posts: [
        {id: 1, from: 'Sergey', message: 'Hello world!'},
        {id: 2, from: 'Evgeniy', message: 'Hi, Danil!'},
        {id: 3, from: 'Innokentiy', message: 'qqq!'}
    ],
    isLoading: true,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'pushNewPost': {
            let newPost = {
                id: 5,
                from: 'Danil',
                message: action.message
            }
            return {
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case 'newPostTextChanger': {
            return {
                posts: [...state.posts],
                newPostText: action.text
            }
        }
        case 'setUserProfile': {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        case 'setLoadStatus': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}


export const pushNewPostAction = (mess) => {
    return {
        type: 'pushNewPost',
        message: mess
    }
}
export const newPostTextChangerAction = (text) => {
    return {
        type: 'newPostTextChanger',
        text: text
    }
}

export const setUserProfileAction = (userProfile) => {
    return {
        type: 'setUserProfile',
        userProfile: userProfile
    }
}

export const setLoadStatusAction = (isLoading) => {
    return {
        type: 'setLoadStatus',
        isLoading: isLoading
    }
}

export default profileReducer