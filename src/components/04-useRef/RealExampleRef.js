import React, { useState } from 'react'
import '../counter.css'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'

const RealExampleRef = () => {
    const [showComponent, setShowComponent] = useState(true)
    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>
            {showComponent && <MultipleCustomHooks />}
            <button className={`btn ${showComponent ? 'btn-danger' : 'btn-success'}`} onClick={() => setShowComponent(!showComponent)}>Toogle Component</button>
        </div>
    )
}

export default RealExampleRef
