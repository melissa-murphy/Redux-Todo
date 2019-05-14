import React from 'react';

const todoItem = props => {
  return (
    <div className='todo-item-wrapper' >
      <p>{ props.todo }</p>
      {/* needs onClick to toggle state */}
      <input type='checkbox' /> 
    </div>
  )
};

export default todoItem;
