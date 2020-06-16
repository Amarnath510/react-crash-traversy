import React, { Component } from 'react';
import TodoItem from '../todo-item/Todo-Item';
import PropTypes from 'prop-types'
import './Todo-Content.css';
import TodoAdd from '../todo-add/Todo-Add';

class TodoContent extends Component {
  render() {
    return (
      <div className="todo-content">
        <TodoAdd addTodo={ this.props.addTodo }/>
        <ul className="todo-content__list">
          { 
            this.props.todos.map(item => {
              return <li key={item.id}>
                <TodoItem key={item.id}
                  todo={item}
                  changeStatus={this.props.changeStatus}
                  removeTodo={ this.props.removeTodo }
                  addTodo={ this.props.addTodo }
                />
              </li>;
            })
          }
        </ul>
      </div>
    );
  }  
}

// You can define types for the props
TodoContent.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoContent;