import { ADD_ITEM, TOGGLE_ITEM } from '../actions';

const initialState = {
  todos: []
}
function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, 
        todos: [
          ...state.todos,
          { name: action.payload, todoCompleted: false }
        ]
      };
    case TOGGLE_ITEM:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              todoCompleted: !todo.todoCompleted
            }
          }
          return todo
        })
      }
      // case DELETE_ITEM:
      // return { ...state, finished: true };
    default:
      return state;
  }
};

export default reducer;
