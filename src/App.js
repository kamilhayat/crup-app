import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';
import './style.css';


const App = () => {
    const [items, setItems] = useState([]);

    // Fetch items on initial render
    useEffect(() => {
        axios.get('http://localhost:5000/api/items')
            .then(res => setItems(res.data))
            .catch(err => console.error(err));
    }, []);

    // Function to add a new item
    const addItem = (name) => {
        axios.post('http://localhost:5000/api/items', { name })
            .then(res => setItems([...items, res.data]))
            .catch(err => console.error(err));
    };

    // Function to delete an item
    const deleteItem = (id) => {
        axios.delete(`http://localhost:5000/api/items/${id}`)
            .then(() => setItems(items.filter(item => item._id !== id)))
            .catch(err => console.error(err));
    };

    // Function to update an item
    const updateItem = (id, name) => {
        axios.put(`http://localhost:5000/api/items/${id}`, { name })
            .then(res => {
                setItems(items.map(item => (item._id === id ? res.data : item)));  // Update item in state
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container">
            <h1>Item List</h1>
            <AddItemForm addItem={addItem} />
            <ItemList items={items} deleteItem={deleteItem} updateItem={updateItem} />
        </div>
    );
};

export default App;
