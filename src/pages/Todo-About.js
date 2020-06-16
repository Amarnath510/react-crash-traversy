import React from 'react';

function TodoAbout() {
  return (
    <div className="todo-about" style={todoAboutStyle}>
      <h1 className="todo-about__title">
        Todo App About Page
      </h1>
      <p>
        About page in order to try <strong>react-router-dom</strong> dependency
      </p>
    </div>
  );
}

const todoAboutStyle = {
  color: '#FFF'
};

export default TodoAbout;