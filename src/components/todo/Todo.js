import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoHeader from '../todo-header/Todo-Header';
import TodoContent from '../todo-content/Todo-Content';
import TodoFooter from '../todo-footer/Todo-Footer';
import { v4 as uuid } from 'uuid';
import TodoAbout from '../../pages/Todo-About';
import axios from 'axios';

import './Todo.css';

class Todo extends Component {
  
  JSON_PLACEHOLDER = 'http://jsonplaceholder.typicode.com/todos';

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get(`${this.JSON_PLACEHOLDER}?_limit=10`)
      .then(resp => this.setState({ todos: resp.data }));
  }

  getItemById = (id) => {
    return this.state.todos.find(todo => todo.id === id);
  }

  updateTodoState = (id) => {
    const { todos } = this.state;
    const itemToUpdate = this.getItemById(id);
    if (itemToUpdate) {
      itemToUpdate.completed = !itemToUpdate.completed;
    }
    return todos;
  }

  removeTodoItem = (id) => {
    let { todos } = this.state;
    const itemToRemove = this.getItemById(id);
    if (itemToRemove) {
      todos = todos.filter(todo => todo.id !== itemToRemove.id);
    }
    return todos;
  }

  changeStatus = (id) => {
    this.setState(
      {
        todos: this.updateTodoState(id)
      }
    );
  }

  removeTodo = (id) => {
    this.setState(
      {
        todos: this.removeTodoItem(id)
      }
    )
  }

  saveTodo = (id, title) => {
    return {
      id,
      title,
      completed: false
    };
  }

  addTodo = (title) => {
    // axios.post(`${this.JSON_PLACEHOLDER}`, { title: 'something', completed: false }) - we can also post but the API is not returning any output
    const id = uuid();
    this.setState({
      todos: [...this.state.todos, this.saveTodo(id, title)]
    })
  }

  render() {
    return(
      <Router>
        <article className="todo">
          <TodoHeader />
          <main className="todo__main">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <TodoContent todos={this.state.todos}
                  changeStatus={this.changeStatus}
                  removeTodo={this.removeTodo}
                  addTodo={this.addTodo}
                />
              </React.Fragment>
            )} />

            <Route exact path="/about" render={props => (
              <React.Fragment>
                <TodoAbout />
              </React.Fragment>
            )} />
          </main>
          <TodoFooter />
        </article>
      </Router>  
    );
  }
}

export default Todo;
