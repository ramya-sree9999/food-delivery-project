const Restaurant = require('../models/Restaurant');

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate('menuItems');
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createRestaurant = async (req, res) => {
  const { name, location, description } = req.body;
  try {
    const restaurant = new Restaurant({ name, location, description });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getRestaurants, createRestaurant };

