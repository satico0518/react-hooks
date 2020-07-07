import { useState } from 'react';

export default (initialState = {}) => {
    const [formState, setFormState] = useState(initialState);
    
    const handleInputChange = ({ target }) =>
    setFormState({ ...formState, [target.name]: target.value });

    return {
        formState,
        handleInputChange
    }
};