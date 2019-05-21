let newId = 0;

export const NEW_TODO = 'NEW_TODO';
export const newTodo = text => ({
  type: NEW_TODO,
  id: newId + 1,
  text
});

export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const toggleItem = id => ({
  type: TOGGLE_ITEM,
  id
})
