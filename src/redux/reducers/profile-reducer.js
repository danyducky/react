import usersAPI from "../DAL/dal";
import React from "react";

const initialState = {
    userProfile: [],
    newPostText: '',
    posts: [
        {id: 1, from: 'Sergey', message: 'Hello world!'},
        {id: 2, from: 'Evgeniy', message: 'Hi, Danil!'},
        {id: 3, from: 'Innokentiy', message: 'qqq!'}
    ],
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
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case 'newPostTextChanger': {
            return {
                ...state,
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

export const getProfileThunk = (userId, defaultId, props) => (dispatch) => {
    if (userId !== undefined) {
        usersAPI.getProfile(userId)
            .then((response) => {
                dispatch(setUserProfileAction(response.data))
            })
    } else if (defaultId) {
        usersAPI.getProfile(defaultId)
            .then((response) => {
                dispatch(setUserProfileAction(response.data))
            })
    } else {
        props.history.push('/login')
    }
}

export default profileReducer