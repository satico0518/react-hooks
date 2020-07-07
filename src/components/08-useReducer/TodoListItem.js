import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({
  todo,
  i,
  handleComplete,
  handleEdit,
  handleDelete,
}) => {
  return (
    <li className="list-group-item" key={todo.id}>
      <div className="row">
        <div className="col-9">
          <p
            style={{ cursor: 'pointer' }}
            className={`${todo.done && 'complete'}`}
            onClick={() => handleComplete(todo.id)}
          >
            {i + 1}. {todo.todo}
          </p>
        </div>
        <div className="col-3">
          <div className="text-right">
            <button
              className="btn btn-warning mr-2"
              onClick={() => handleEdit(todo)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoListItem;
