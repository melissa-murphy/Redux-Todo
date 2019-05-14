import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToDoList extends Component {
  state = {  }
  render() { 
    return (  );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo,
    finished: state.finished
  }
}
 
export default connect(
  mapStateToProps,
  { addItem, deleteItem, toggleItem }
)(TodoList)