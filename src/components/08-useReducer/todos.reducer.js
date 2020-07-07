export default (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return [...state, payload];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== payload);
    case 'EDIT_TODO':
      return state.map(todo => todo.id === payload.id ? payload : todo);
    case 'COMPLETE_TODO':
      return state.map(todo => todo.id === payload ? {...todo, done: !todo.done} : todo);

    default:
      return state;
  }
};
