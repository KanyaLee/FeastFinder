const fetch = require('node-fetch');

const findRestaurants = async (req,res) => {
    const {latitude, longitude} = req.query;
    const radius = 6000; 
    const yelpApiKey = process.env.YELP_API_KEY;
    const url = `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&radius=${radius}&categories=restaurants`;

    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${yelpApiKey}`,
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        console.log("Yelp API Response:", data);
        res.send(data.businesses)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching data from Yelp')
    }
}
module.exports = { findRestaurants }; 

