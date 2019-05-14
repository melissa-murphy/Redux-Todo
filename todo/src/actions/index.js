const ADD_ITEM = 'ADD_ITEM';
export const addItem = newItem => {
    return {
        type: ADD_ITEM,
        payload: newItem
    }
}

const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const toggleItem = id => {
    return {
        type: TOGGLE_ITEM,
        payload: id
    }
}


// const DELETE_ITEM = 'DELETE_ITEM';
// export function deleteItem()
