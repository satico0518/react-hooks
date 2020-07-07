import React from 'react';

const { shallow } = require('enzyme');
import '@testing-library/jest-dom';
import TodoListItem from '../../components/08-useReducer/TodoListItem';

describe('TodoListItem', () => {
  const todo = { id: 1, todo: 'Make bed', done: false };
  const i = 0;
  const handleComplete = jest.fn();
  const handleEdit = jest.fn();
  const handleDelete = jest.fn();
  test('should match snapshot', () => {
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        i={i}
        handleComplete={handleComplete}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('should render todo ok', () => {
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        i={i}
        handleComplete={handleComplete}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    expect(wrapper.find('p').text()).toBe(`${i + 1}. ${todo.todo}`);
  });
  test('should call handleComplete', () => {
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        i={i}
        handleComplete={handleComplete}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    wrapper.find('p').simulate('click');
    expect(handleComplete).toHaveBeenCalledTimes(1);
    expect(handleComplete).toHaveBeenCalledWith(todo.id);
  });
  test('should call handleEdit', () => {
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        i={i}
        handleComplete={handleComplete}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    wrapper.find('.btn-warning').simulate('click');
    expect(handleEdit).toHaveBeenCalledTimes(1);
    expect(handleEdit).toHaveBeenCalledWith(todo);
  });
  test('should call handleDelete', () => {
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        i={i}
        handleComplete={handleComplete}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    wrapper.find('.btn-danger').simulate('click');
    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(todo.id);
  });
});
