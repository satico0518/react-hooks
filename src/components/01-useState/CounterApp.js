import React, { useState } from 'react';
import '../counter.css';

const CounterApp = () => {
    const [{counter1, counter2}, setCounter] = useState({
        counter1: 40,
        counter2: 50,
    });
    const handleAdd = () => setCounter(counter => ({ ...counter, counter2: counter2 + 1 }))
    return (
        <>
            <h1>Counter1 { counter1 }</h1>
            <h1>Counter2 { counter2 }</h1>
            <hr />
            <button className='btn btn-primary' onClick={handleAdd}>+1</button>
        </>
    )
}

export default CounterApp
