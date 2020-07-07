import React from 'react';

export const IncrementButton = React.memo(({ increment }) => {
    console.log('IncrementButton called ');
    
  return (
    <button onClick={() => increment(5)} className="btn btn-primary">
      Increment
    </button>
  );
});
