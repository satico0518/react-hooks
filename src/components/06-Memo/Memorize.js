import React, { useState } from 'react';
import '../counter.css';
import useCounter from '../../hooks/useCounter';
import Small from './Small';

const Memorize = () => {
  const [state, setstate] = useState(true);
  const { counter, increment } = useCounter(10);
  return (
    <div>
      <h1>
        Memorize - Counter: <Small value={counter} />
      </h1>
      <hr />
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

export default Memorize;
