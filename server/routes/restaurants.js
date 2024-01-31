const express = require('express')
const { findRestaurant } = require('../controllers/restaurantController');
const router = express.Router();

router.get('/restaurants', findRestaurant);

module.exports = router;

