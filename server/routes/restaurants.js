const express = require('express');
const router = express.Router();

const { findRestaurants } = require('../controllers/restaurantController');

router.get('/restaurants', findRestaurants);

module.exports = router;


