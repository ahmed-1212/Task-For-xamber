import axios from 'axios';

const initState = {
    "email": "y_battach@bixet.tech", 
	"subject": "Hello World",
	"message": "Hello World",
	"name": "Ahmed Dhafer",
	"website": "www.bixet.tech",
    "phone": "+213659818726",
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
                    "email": "", 
                    "subject": "",
                    "message": "",
                    "name": "",
                    "website": "",
                    "phone": "",

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