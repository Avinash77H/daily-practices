import React, { useState } from 'react';

function MyComponent() {
  const [items, setItems] = useState([
    'item1',
    'item2',
    'item3'
  ]);

  const addItem = () => {
    setItems([...items, 'new item']);
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default MyComponent;