import React, { Component } from 'react';
import './Todo-Item.css';
import PropTypes from 'prop-types'

class TodoItem extends Component {

  render() {
    const { id, title, completed } = this.props.todo; // destructuring
    return(
      <div className="todo-item" key={ id }>
        <div className="todo-item__input-title-wrapper">
          <input type="checkbox"
            value={ id }
            name={ id }
            id={ id }
            className="todo-item__check"
            defaultChecked={ completed }
            onChange={ this.props.changeStatus.bind(this, id) }/>
          <label htmlFor={ id } className={ completed ? 'todo-item__strike' : '' }>
            { title }
          </label>
        </div>
        <div className="todo-item__btn-wrapper">
          <button type="button" className="todo-item__btn btn" onClick={ this.props.removeTodo.bind(this, id)}>X</button>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
