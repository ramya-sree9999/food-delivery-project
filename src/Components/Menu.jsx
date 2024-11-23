import React, { useState } from 'react';
import './App.css';

function Menu({ addItemToCart }) {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Pizza', price: 10, image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/94/0a/7c/yaaayyyy.jpg?w=600&h=-1&s=1' },
  ]);

  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({ id: null, name: '', price: '', image: '' });

  const handleEditClick = (item) => {
    setEditing(true);
    setCurrentItem(item);
  };

  const handleSave = () => {
    if (currentItem.id) {
      setMenuItems(menuItems.map((item) => (item.id === currentItem.id ? currentItem : item)));
    } else {
      setMenuItems([...menuItems, { ...currentItem, id: Date.now() }]);
    }
    setEditing(false);
    setCurrentItem({ id: null, name: '', price: '', image: '' });
  };

  return (
    <div>
      <h2>Menu</h2>
      <button onClick={() => setEditing(true)}>Add Item</button>
      {editing && (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={currentItem.name}
            onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={currentItem.price}
            onChange={(e) => setCurrentItem({ ...currentItem, price: parseFloat(e.target.value) })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={currentItem.image}
            onChange={(e) => setCurrentItem({ ...currentItem, image: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="small-image" />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => addItemToCart(item)}>Add to Cart</button>
            <button onClick={() => handleEditClick(item)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
