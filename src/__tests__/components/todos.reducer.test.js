import '@testing-library/jest-dom';
import todosReducer from '../../components/08-useReducer/todos.reducer';

describe('todos.reducer', () => {
  const initialState = [{ id: 1, todo: 'Swimming', done: false }];
  test('should return default state', () => {
    const state = todosReducer(initialState, {});
    expect(state).toEqual(initialState);
  });
  test('should add new todo', () => {
    const action = {
      type: 'ADD_TODO',
      payload: { id: 2, todo: 'Running', done: false },
    };
    const state = todosReducer(initialState, action);
    expect(state).toEqual([...initialState, action.payload]);
  });
  test('should delete todo by id', () => {
    const action = {
      type: 'DELETE_TODO',
      payload: 1,
    };
    const state = todosReducer(initialState, action);
    expect(state).toEqual([]);
  });
  test('should update todo ', () => {
    const action = {
      type: 'EDIT_TODO',
      payload: { id: 1, todo: 'Swimming faster', done: false },
    };
    const state = todosReducer(initialState, action);
    expect(state).toEqual([action.payload]);
  });
  test('should complete todo ', () => {
    const action = {
      type: 'COMPLETE_TODO',
      payload: 1,
    };
    const state = todosReducer(initialState, action);
    console.log(state);
    
    expect(state.find((t) => t.id === action.payload).done).toEqual(
      !initialState.find((t) => t.id === action.payload).done
    );
  });
});
