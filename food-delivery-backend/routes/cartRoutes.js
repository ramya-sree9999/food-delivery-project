const express = require('express');
const { getCart, addItemToCart } = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/cart', authMiddleware, getCart);
router.post('/cart', authMiddleware, addItemToCart);

module.exports = router;

