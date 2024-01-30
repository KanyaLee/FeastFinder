const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const app = express();

// GET /api/restaurant
router.get('/api/restaurants',async (req,res) => {
    const {latitude, longitude} = req.query;
    const yelpApiKey = process.env.YELP_API_KEY;
    const url = `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&categories=restaurants`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${yelpApiKey}`,
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        res.send(data.businesses)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching data from Yelp')
    }
} );

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });

