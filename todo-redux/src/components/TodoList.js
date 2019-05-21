import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodoList = ({ todos, doneOnClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem key={index} {...todo} onClick={() => doneOnClick(index)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  doneOnClick: PropTypes.func.isRequired
};

export default TodoList;
