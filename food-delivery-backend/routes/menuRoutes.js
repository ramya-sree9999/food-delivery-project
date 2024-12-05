const express = require('express');
const { getMenuItems, createMenuItem } = require('../controllers/menuController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/menu', getMenuItems);
router.post('/menu', authMiddleware, createMenuItem);

module.exports = router;

