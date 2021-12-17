const initialState = {
    detail : []
}

const addContact = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            const {email, message} = action.payload;
            return {
                ...state,
                detail : [
                    ...state.detail,
                    {
                        email: email,
                        message: message
                    }
                ]
            }
        default: return state
    }
}

export default addContact
