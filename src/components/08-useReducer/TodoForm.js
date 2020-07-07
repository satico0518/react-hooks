import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ todoToEdit, addTodo }) => {
  const [newTodo, setNewTodo] = useState({});
  const handleChange = (e) => setNewTodo({ ...newTodo, todo: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.todo.length < 1) return alert('Todo is required');
    addTodo(newTodo);
    setNewTodo({});
  };
  useEffect(() => {
    if (todoToEdit !== null) setNewTodo(todoToEdit);
  }, [todoToEdit]);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        value={newTodo.todo || ''}
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
