import React from 'react';
import TodoItem from './TodoItem';

const TodoList = { todos, toggleItem, addItem }(
  // // handle change
  // handleChange = e => {
  //   this.setState({ newTodo: e.target.value });
  // };

  // // add item
  // addItem = e => {
  //   e.preventDefault();
  //   this.props.addItem(this.state.newTodo);
  //   this.setState({ newTodo: '' });
  // };

  // // toggle item
  // toggleItem = id => {
  //   this.props.toggleItem(id);
  // };

  // let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  <>
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          onClick={() => this.toggleItem(todo.id)}
        >
          {todo}
        </TodoItem>
      ))}
    </ul>
    <input
      type="text"
      value={todo.newTodo}
      onChange={this.handleChange}
      placeholder="+toDo"
    />
    <button onClick={this.addItem}>+add</button>
  </>
);

// const mapStateToProps = state => {
//   return {
//     todos: state.todos,
//     todoCompleted: state.todoCompleted
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getList, addItem, toggleItem }
// )(TodoList);

export default TodoList;
