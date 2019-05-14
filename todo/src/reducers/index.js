const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const TOGGLE_ITEM = 'TOGGLE_ITEM'

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, finished: false };
    case DELETE_ITEM:
      return { ...state, finished: true };
    case TOGGLE_ITEM:
      return { ...state, toggleItem: !state.toggleItem };
    default:
      return state;
  }
};

export default todo;
