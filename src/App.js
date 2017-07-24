import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoStore from './stores/Todo.Store';
import PeopleStore from './stores/People.Store';
import TodoList from './components/TodoList';

class App extends Component {

    constructor() {
        super();
    }

    keyUpHandler(peopleStore, event) {
        peopleStore.people[1].name = event.target.value
    }

    add(observableTodoStore, event) {
        console.log("add");
        observableTodoStore.pendingRequests++;
        setTimeout(function() {
            observableTodoStore.addTodo('Random Todo ' + Math.random());
            observableTodoStore.pendingRequests--;
        }, 2000);
    }


  render() {

      const observableTodoStore = new TodoStore();
      observableTodoStore.addTodo("read MobX tutorial");
      observableTodoStore.addTodo("try MobX");
      observableTodoStore.todos[0].completed = true;
      observableTodoStore.todos[1].task = "try MobX in own project";
      observableTodoStore.todos[0].task = "grok MobX tutorial";
      observableTodoStore.todos[1].task = "Random todo " + Math.random();
      observableTodoStore.todos.push({ task: "Find a fine cheese", completed: true });

      const peopleStore = new PeopleStore();
      peopleStore.addPeople("Michel");
      peopleStore.addPeople("Me");

      observableTodoStore.todos[0].assignee = peopleStore.people[0];
      observableTodoStore.todos[1].assignee = peopleStore.people[1];
      peopleStore.people[0].name = "Michel Weststrate";

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <TodoList store={ observableTodoStore } />

          <div className="Change-name">
              Change name <input onKeyUp={this.keyUpHandler.bind(this, peopleStore)} />
          </div>

          <div className="Load-todo">
              Asynchronous actions
              <button onClick={this.add.bind(this, observableTodoStore)}>Load todo</button>
          </div>
      </div>
    );
  }
}

export default App;
