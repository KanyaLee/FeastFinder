const express = require('express');
const restaurantsRouter = require('./routes/restaurants');
// const reviewsRouter = require('./routes/reviews'); 

require('dotenv').config();
const app = express();

app.use(express.json());
app.use('/api',restaurantsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});



