import React, { useState } from 'react';
import '../counter.css';
import useFetch from '../../hooks/useFetch';

const MultipleCustomHooks = ({initialId}) => {
  const [id, setId] = useState(initialId);
  const { data, loading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${id}`
  );
  return (
    <>
      <h2>current Quote Id: {id}</h2>
      <button onClick={() => setId(Math.ceil(Math.random() * 30))}>
        random Id
      </button>
      <div>
        {loading && <p>loading...</p>}
        {data && !loading && (
          <blockquote className="blockquote text-right">
            <p className="mb-0">{data[0].quote}</p>
            <footer className="blockquote-footer">{data[0].author}</footer>
          </blockquote>
        )}
      </div>
    </>
  );
};

export default MultipleCustomHooks;
