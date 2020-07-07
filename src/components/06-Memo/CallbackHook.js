import React, { useState, useCallback, useEffect } from 'react';
import '../counter.css';
import { IncrementButton } from './IncrementButton';

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback((num) => {
    setCounter((c) => c + num);
  }, [setCounter]);

  // it works also with use effect when a function is set as dependency
  useEffect(() => {
    // some logic will no longer execute if function "increment" does not change
  }, [increment])

  return (
    <div>
      <h1>CallbackHook - Counter: {counter}</h1>
      <hr />
      <IncrementButton increment={ increment } />
    </div>
  );
};

export default CallbackHook;
