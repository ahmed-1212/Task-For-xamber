import axios from 'axios';

const initState = {
    
    send: false
}

export const send = (data) => {
    return dispatch => {
        axios.post('https://xamber-d2eab.firebaseio.com/contact.json', data).then(response => {
            console.log(response)
        })
        .catch(error => {
            dispatch(error)
        });

    }
}

const reducer = ( state = initState, action ) => {

        switch (action.type) {
            case 'SEND':
                
                return {
                    ...state,
                    send: true,
                }
                case 'DONE':
                    return {
                        ...state,
                        send: false
                    }
                default:
                    return state
        }
};

export default reducer;