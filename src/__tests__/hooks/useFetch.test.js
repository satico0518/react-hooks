const { renderHook } = require('@testing-library/react-hooks');
const { default: useFetch } = require('../../hooks/useFetch');

describe('useFetch', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useFetch(''));
    const { data, error, loading } = result.current;
    expect(data).toEqual([{ quote: '' }]);
    expect(loading).toBeTruthy();
    expect(error).toBeNull();
  });
  test('should return real values', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    await waitForNextUpdate();
    const { data, error, loading } = result.current;
    expect(data[0].quote.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
    expect(error).toBeNull();
  });
});
