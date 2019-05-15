import React from 'react';

const TodoItem = ({ onClick, completed, todos }) => (
    <p
        onClick={onClick}
        style={{
            textDecoration: completed ? 'wavy-overline' : 'none'
        }}
        > { todos } </p>
)

export default TodoItem;