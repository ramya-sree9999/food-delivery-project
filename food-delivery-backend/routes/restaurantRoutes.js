const express = require('express');
const { getRestaurants, createRestaurant } = require('../controllers/restaurantController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/restaurants', getRestaurants);
router.post('/restaurants', authMiddleware, createRestaurant);

module.exports = router;

