import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem, toggleItem } from '../actions';

class TodoList extends Component {
  state = {
    newItem: ''
  };

  handleChange = ev => {
    this.setState({ newItem: ev.target.value })
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo,
    finished: state.finished
  };
};

export default connect(
  mapStateToProps,
  { addItem, toggleItem }
)(TodoList);
