import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoStore from './stores/Todo.Store';
import TodoList from './components/TodoList';

class App extends Component {
  render() {

      const observableTodoStore = new TodoStore();
      observableTodoStore.addTodo("read MobX tutorial");
      observableTodoStore.addTodo("try MobX");
      observableTodoStore.todos[0].completed = true;
      observableTodoStore.todos[1].task = "try MobX in own project";
      observableTodoStore.todos[0].task = "grok MobX tutorial";

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <TodoList store={ observableTodoStore } />
      </div>
    );
  }
}

export default App;
