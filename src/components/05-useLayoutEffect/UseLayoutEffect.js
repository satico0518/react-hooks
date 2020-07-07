import React, { useState, useRef, useLayoutEffect } from 'react';
import './layout.css';
import useFetch from '../../hooks/useFetch';

const UseLayoutEffect = () => {
  const [id, setId] = useState(5);
  const [pBoxSize, setPBoxSize] = useState();
  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${id}`
  );
  const pEl = useRef();
  useLayoutEffect(() => {
    setPBoxSize(pEl.current.getBoundingClientRect());
  }, [data]);
  return (
    <>
      <h1>UseLayoutEffect - current Quote Id: {id}</h1>
      <button onClick={() => setId(Math.ceil(Math.random() * 30))}>
        random Id
      </button>
      <hr />
      <div>
        <blockquote className="blockquote text-right">
          <p ref={pEl} className="mb-0">
            {data[0].quote}
          </p>
        </blockquote>
      </div>
      <pre>{JSON.stringify(pBoxSize, null, 3)}</pre>
    </>
  );
};

export default UseLayoutEffect;
