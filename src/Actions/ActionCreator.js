export const addToDo = (data) => {
    return {
        type : "ADD_ITEM",
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const deleteToDo = (id) => {
    return {
        type : "DELETE_ITEM",
        id
    }
}

export const removeAllToDo = () => {
    return {
        type : "REMOVE_ALL_ITEM"
    }
}

