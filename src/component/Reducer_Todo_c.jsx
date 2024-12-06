import React, { useReducer } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, { text: action.text, completed: false }] };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo, index) =>
          index === action.index ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter((_, index) => index !== action.index),
      };
    default:
      return state;
  }
};

const Reducer_Todo_c = () => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', text });
  };

  const toggleTodo = (index) => {
    dispatch({ type: 'TOGGLE_TODO', index });
  };

  const removeTodo = (index) => {
    dispatch({ type: 'REMOVE_TODO', index });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        onBlur={(e) => addTodo(e.target.value)}
        placeholder="Add a todo"
      />
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reducer_Todo_c;
