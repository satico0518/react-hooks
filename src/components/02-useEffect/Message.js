import React, { useEffect } from 'react'

const Message = () => {
    useEffect(() => {
        console.log('mounted');
        window.addEventListener('mousemove', console.log );
        return () => {
            window.removeEventListener('mousemove', console.log );
        }
    }, [])
    return (
        <div>
            este es un mensaje
        </div>
    )
}

export default Message
