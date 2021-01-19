const initialState = {
    messages: [
        {id: 1, name: 'Danil', message: 'Привет, как дела?'},
        {id: 2, name: 'Sergey', message: 'ebalo korobka!'},
        {id: 3, name: 'Andriano Chelentano', message: 'Я бог!'},
        {id: 4, name: 'Stephen Curry', message: 'Привет Данил!'}
    ]
}


const imReducer = (state = initialState, action) => {
    return state
}

export default imReducer