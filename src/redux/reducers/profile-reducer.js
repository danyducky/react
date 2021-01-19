const initialState = {
    newPostText: '',
    posts: [
        {id: 1, from: 'Sergey', message: 'Hello world!'},
        {id: 2, from: 'Evgeniy', message: 'Hi, Danil!'},
        {id: 3, from: 'Innokentiy', message: 'qqq!'}
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'pushNewPost': {
            let newPost = {
                id: 5,
                from: 'Danil',
                message: action.message
            }

            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]

            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case 'newPostTextChanger': {
            let stateCopy = {...state}

            stateCopy.newPostText = action.text;
            return stateCopy
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

export default profileReducer