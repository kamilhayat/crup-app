import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            addItem(name);
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add item" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddItemForm;
