import { NEW_TODO, TOGGLE_ITEM } from '../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case NEW_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      case: TOGGLE_ITEM:
      return state.map(todo =>
        todo.id === action.id ? {...todo, done: !todo.done } : todo
        )
    default:
      return state;
  }
};

export default todos;