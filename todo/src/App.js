import React, { Component } from 'react';
import { connect } from 'react-redux';
import { something } from './actions';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todo: ''
  }

  render() {
    return (
      <div className="App">
        <TodoList>
          <TodoForm />
        </TodoList>
      </div>
    );
  }
}

export default App;
