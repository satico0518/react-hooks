import { useState } from 'react';

export default (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);
  const increment = (factor) => setCounter(counter + factor);
  const decrement = (factor) => setCounter(counter - factor);
  const reset = (resetValue = initialState) => setCounter(resetValue);
  return { counter, increment, decrement, reset };
};
