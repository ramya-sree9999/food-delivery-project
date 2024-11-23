import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
// import restaurantImage from './assets/images/restaurant.jpg';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: 'Restaurant A', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8u6jHz8gC4PZJ8x7Ci01wbckQoQvXs3EKvw&s", description: 'A great place for pizza.' },
    { id: 2, name: 'Restaurant B', image: 'https://content.jdmagicbox.com/v2/comp/hyderabad/w9/040pxx40.xx40.221019141008.k9w9/catalogue/thangedu-raidurgam-hyderabad-restaurants-f6xc3nb6kq.jpg', description: 'Delicious burgers and fries.' },
    { id: 3, name: 'Restaurant C', image: 'https://media-cdn.tripadvisor.com/media/photo-s/12/6a/ae/90/bawarchi-front-view-of.jpg', description: 'Fresh sushi and ramen.' },
  ]);

  const [editing, setEditing] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState({ id: null, name: '', description: '', image: '' });

  const handleEditClick = (restaurant) => {
    setEditing(true);
    setCurrentRestaurant(restaurant);
  };

  const handleSave = () => {
    if (currentRestaurant.id) {
      setRestaurants(restaurants.map((res) => (res.id === currentRestaurant.id ? currentRestaurant : res)));
    } else {
      setRestaurants([...restaurants, { ...currentRestaurant, id: Date.now() }]);
    }
    setEditing(false);
    setCurrentRestaurant({ id: null, name: '', description: '', image: '' });
  };

  return (
    <div className="restaurant-list">
      <h2>Restaurant List</h2>
      <button onClick={() => setEditing(true)}>Add Restaurant</button>
      {editing && (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={currentRestaurant.name}
            onChange={(e) => setCurrentRestaurant({ ...currentRestaurant, name: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={currentRestaurant.description}
            onChange={(e) => setCurrentRestaurant({ ...currentRestaurant, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={currentRestaurant.image}
            onChange={(e) => setCurrentRestaurant({ ...currentRestaurant, image: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant-card">
          <img src={restaurant.image} alt={restaurant.name} />
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
          <button onClick={() => handleEditClick(restaurant)}>Edit</button>
          <Link to={`/menu/${restaurant.id}`}>
            <button>View Menu</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;