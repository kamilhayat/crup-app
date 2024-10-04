import React, { useState } from 'react';

const ItemList = ({ items, deleteItem, updateItem }) => {
    const [editingItemId, setEditingItemId] = useState(null);
    const [editingItemName, setEditingItemName] = useState('');

    const handleEditClick = (item) => {
        setEditingItemId(item._id);
        setEditingItemName(item.name);
    };

    const handleSaveClick = (id) => {
        updateItem(id, editingItemName);
        setEditingItemId(null);
    };

    return (
        <ul>
            {items.map(item => (
                <li key={item._id}>
                    {editingItemId === item._id ? (
                        <>
                            <input
                                type="text"
                                value={editingItemName}
                                onChange={(e) => setEditingItemName(e.target.value)}
                            />
                            <div className="button-group">
                                <button className="save" onClick={() => handleSaveClick(item._id)}>Save</button>
                                <button className="cancel" onClick={() => setEditingItemId(null)}>Cancel</button>
                            </div>
                        </>
                    ) : (
                        <>
                            {item.name}
                            <div className="button-group">
                                <button className="edit" onClick={() => handleEditClick(item)}>Edit</button>
                                <button className="delete" onClick={() => deleteItem(item._id)}>Delete</button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
