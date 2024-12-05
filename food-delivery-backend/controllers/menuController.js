const Menu = require('../models/Menu');

const getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createMenuItem = async (req, res) => {
  const { name, price, description, restaurant } = req.body;
  try {
    const menuItem = new Menu({ name, price, description, restaurant });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getMenuItems, createMenuItem };
