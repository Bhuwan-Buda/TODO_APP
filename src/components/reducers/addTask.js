const initialData = {
    list: []
}

const addTask = (state = initialData, action) => {
    switch(action.type) {
        case "ADD_TASK" :
            const {id, data} = action.payload
            return {
                ...state,
                list : [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        case "DELETE_TASK":
            const updatedList = state.list.filter((task) => task.id !== action.id)
            return {
                ...state,
                list: updatedList
            }

        default: return state
    }
}

export default addTask