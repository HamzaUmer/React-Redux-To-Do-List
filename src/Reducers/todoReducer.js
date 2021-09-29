const initialState = {
    list : []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM" : 
        const { id, data } = action.payload;
        if (data.length > 2) {
        return {
            ...state,
            list: [
                ...state.list,
                {
                    id: id,
                    data : data
                }
            ]
        }
    }
            case "DELETE_ITEM" : 
            const newlist = state.list.filter((elem) => elem.id != action.id)
    
            return {
                ...state,
                list : newlist
            }

            case "REMOVE_ALL_ITEM" : return {
                ...state,
                list : []
            }
        default: return state;
    }
}

export default todoReducer;