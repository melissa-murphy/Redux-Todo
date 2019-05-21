import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ onClick, done, text }) => (
  <li
    onClick={onClick}
    style={{ textDecoration: done ? 'line-through' : 'none' }}
  >
    {text}
  </li>
);

TodoItem.propTypes = {
  done: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string
};

export default TodoItem;
