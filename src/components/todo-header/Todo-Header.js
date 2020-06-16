import React from 'react';
import './Todo-Header.css';

// This is function based Component where we just have a HTML content
// If we use class we can have methods
function TodoHeader() {
  return (
    <header className="todo-header">
      <h1 className="todo-header__title">
        Todo App - React Tutorial
      </h1>
    </header>
  );
}

export default TodoHeader;