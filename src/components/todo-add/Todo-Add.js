import React, { Component } from 'react'
import './Todo-Add.css';

class TodoAdd extends Component {
  state = {
    title: ''
  }

  onInputChange = (e) => this.setState({ title: e.target.value })

  addTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
  }

  render() {
    return(
      <form className="todo-add" onSubmit={this.addTodo}>
        <input type="text" placeholder="Add a Todo Item" id="todo_add" className="todo-add__input-text" value={this.state.title} onChange={this.onInputChange}/>
        <input type="submit" value="submit" className="btn todo-add__input-submit-btn"/>
      </form>
    );
  }
}

export default TodoAdd;
