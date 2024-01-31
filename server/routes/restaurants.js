const express = require('express');
const router = express.Router();

const { findRestaurants } = require('../controllers/restaurantController');

router.get('/api/restaurants', findRestaurants);

module.exports = router;


