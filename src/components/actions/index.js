export const incNumber = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
}

export const addTask = (data) => {
    return {
        type: 'ADD_TASK',
        payload: {
            id: Math.random(),
            data: data
        }
    }
}


export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id
    }
}

export const addContact = (email, message) => {
    return {
        type: 'ADD_CONTACT',
        payload: {
            email: email,
            message: message
        }
    }
}