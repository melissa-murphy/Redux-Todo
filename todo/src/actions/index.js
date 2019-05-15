let newId = 0;

export const GET_LIST = 'GET_LIST';
export const getList = text => {
    return {
        type: GET_LIST,
        id: newId + 1,
        payload: text
    }
}
// export const ADD_ITEM = 'ADD_ITEM';
// export const addItem = newItem => {
//     return {
//         type: ADD_ITEM,
//         id: newId + 1,
//         completed: false,
//         payload: newItem
//     }
// }

export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const toggleItem = id => {
    return {
        type: TOGGLE_ITEM,
        payload: id
    }
}


// const DELETE_ITEM = 'DELETE_ITEM';
// export function deleteItem()
