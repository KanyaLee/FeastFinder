const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

// GET /api/restaurant
router.get('/api/restaurants',async (req,res) => {
    const {latitude, longitude} = req.query;
    const yelpApiKey = process.env.REACT_APP_YELP_API_KEY;
    const url = 'https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&categories=restaurants';
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${yelpApiKey}`,
                'Content-Type': 'application/json',
            }
        })
    }
} )