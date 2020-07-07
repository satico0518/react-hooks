import React, { useReducer, useState } from 'react';
import './styles.css';
import todoReducer from './todos.reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const initialState = [
  {
    id: 1,
    todo: 'make bed',
    done: false,
  },
];

const Todos = () => {
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const handleDelete = (id) => dispatch({ type: 'DELETE_TODO', payload: id });
  const handleEdit = (todo) => setTodoToEdit(todo);
  const handleComplete = (id) =>
    dispatch({
      type: 'COMPLETE_TODO',
      payload: id,
    });
  const addTodo = (newTodo) => {
    if (!todoToEdit) {
      dispatch({
        type: 'ADD_TODO',
        payload: {
          id: Math.ceil(Math.random() * 100000),
          todo: newTodo.todo,
          done: false,
        },
      });
    } else {
      dispatch({
        type: 'EDIT_TODO',
        payload: { ...newTodo, todo: newTodo.todo },
      });
      setTodoToEdit(null);
    }
  };
  return (
    <>
      <h1>Todos - UseReducer</h1>
      <hr />
      <TodoForm todoToEdit={todoToEdit} addTodo={addTodo} />
      <hr />
      <TodoList
        todos={todos}
        handleComplete={handleComplete}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Todos;
