import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem, toggleItem, deleteItem } from '../actions';

class TodoList extends Component {}

const mapStateToProps = state => {
  return {
    todo: state.todo,
    finished: state.finished
  };
};

export default connect(
  mapStateToProps,
  { addItem, deleteItem, toggleItem }
)(TodoList);
