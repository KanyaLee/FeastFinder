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

        if (!response.ok) {
            throw new Error(`Yelp api error@ status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.businesses) {
            console.error("Yelp API response is missing the businesses filed:", data);
            return res.status(500).send('Invalid data format received from Yelp API');
        }
        res.send(data.businesses)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching data from Yelp')
    }
}

module.exports = { findRestaurants }; 

