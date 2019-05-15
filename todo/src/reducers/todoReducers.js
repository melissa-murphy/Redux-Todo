import { GET_LIST, ADD_ITEM, TOGGLE_ITEM } from '../actions';

export default (todos = [], action) => {
  switch (action.type) {
    case GET_LIST:
      return action.payload;
    case ADD_ITEM:
      return [...todos, action.payload];
    case TOGGLE_ITEM:
      return {
        ...todos,
        todos: todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todos,
              completed: !todo.completed
            };
          }
          return todos;
        })
      };
    // case DELETE_ITEM:
    // return { ...state, finished: true };
    default:
      return todos;
  }
};

// export default reducers;
