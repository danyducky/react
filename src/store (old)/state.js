import profileReducer from './profile-reducer.js'

const store = {
    _updateRender() {
        //
    },

    listener(observer) {
        this._updateRender = observer
    },
    
    _state: {
        imPage: {
            messages: [
                {id: 1, name: 'Danil', message: 'Привет, как дела?'},
                {id: 2, name: 'Sergey', message: 'ebalo korobka!'},
                {id: 3, name: 'Andriano Chelentano', message: 'Я бог!'},
                {id: 4, name: 'Stephen Curry', message: 'Привет Данил!'}
            ]
        },
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, from: 'Sergey', message: 'Hello world!'},
                {id: 2, from: 'Evgeniy', message: 'Hi, Danil!'},
                {id: 3, from: 'Innokentiy', message: 'qqq!'}
            ]
        } 
    },
    
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._updateRender()
    }
}

// export const pushNewPostAction = (mess) => {
//     return {
//         type: 'pushNewPost',
//         message: mess
//     }
// }
// export const newPostTextChangerAction = (text) => {
//     return {
//         type: 'newPostTextChanger',
//         text: text
//     }
// }



export default store;