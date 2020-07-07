import React, { useRef } from 'react'
import '../counter.css'

const FocusScreen = () => {
    const inputRef = useRef();
    const handleClick = e => inputRef.current.select();
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input ref={inputRef} type="text" className="form-control" placeholder="your name"/>
            <button onClick={ handleClick } className='btn btn-outline-primary mt-5'>Focus</button>
        </div>
    )
}

export default FocusScreen
