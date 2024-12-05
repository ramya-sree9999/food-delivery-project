const Cart = require('../models/cart');
const Menu = require('../models/Menu');

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.menuItem');
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const addItemToCart = async (req, res) => {
  const { menuItemId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      cart = new Cart({ user: req.user.id, items: [{ menuItem: menuItemId, quantity }] });
    } else {
      const itemIndex = cart.items.findIndex(item => item.menuItem.toString() === menuItemId);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ menuItem: menuItemId, quantity });
      }
    }
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getCart, addItemToCart };
