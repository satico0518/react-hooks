const { renderHook, act } = require('@testing-library/react-hooks');
const { default: useForm } = require('../../hooks/useForm');
import '@testing-library/jest-dom';

describe('useForm', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useForm({ name: 'Juancho' }));
    const { formState, handleInputChange } = result.current;
    expect(Object.keys(result.current)).toHaveLength(2);
    expect(formState).toEqual({ name: 'Juancho' });
    expect(typeof handleInputChange).toBe('function');
  });
  test('should update the state onChange', () => {
    const { result } = renderHook(() => useForm({ name: '' }));
    const { handleInputChange } = result.current;
    act(() => {
      handleInputChange({ target: { name: 'name', value: 'Davo Gomez' } });
    });
    const { formState } = result.current;
    expect(formState.name).toBe('Davo Gomez');
  });
});
