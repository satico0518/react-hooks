const { renderHook, act } = require('@testing-library/react-hooks');
const { default: useCounter } = require('../../hooks/useCounter');
import '@testing-library/jest-dom';

describe('useCounter', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());
    expect(Object.keys(result.current)).toHaveLength(4);
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });
  test('should return counter passed via args', () => {
    const { result } = renderHook(() => useCounter(50));
    expect(result.current.counter).toBe(50);
  });
  test('should increment counter in 5', () => {
    const { result } = renderHook(() => useCounter(10));
    const { increment } = result.current;
    act(() => increment(5));
    expect(result.current.counter).toBe(15);
  });
  test('should decrement counter in 10', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => decrement(10));
    expect(result.current.counter).toBe(90);
  });
  test('should reset counter to default value', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;
    act(() => {
      increment(50);
      reset();
    });
    expect(result.current.counter).toBe(100);
  });
});
