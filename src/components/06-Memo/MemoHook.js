import React, { useState, useMemo } from 'react';
import useCounter from '../../hooks/useCounter';
import weightProccess from "../../helpers/weightProccess";
import '../counter.css';

const MemoHook = () => {
  const [state, setstate] = useState(true);
  const { counter, increment } = useCounter(4000);
  
  const weightProccessMemo = useMemo(() => weightProccess(counter), [counter])
  return (
    <div>
      <h1>
        Memorize - Counter: <small>{counter}</small>
      </h1>
      <hr />
      <p>Weight Proccess Status : {weightProccessMemo}</p>
      <button className="btn btn-success" onClick={() => increment(5)}>
        {' '}
        + 1
      </button>
      <hr />
      <h2>Showing {state ? 'yesss' : 'noooo'}</h2>
      <button className="btn btn-warning" onClick={() => setstate(!state)}>
        Change state{' '}
      </button>
    </div>
  );
};

export default MemoHook;
