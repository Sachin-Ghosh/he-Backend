const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const bookingRouter = require('./routes/bookingRoute');

const app = express();

require('dotenv').config();
require('./cronJob');

connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/bookings', bookingRouter);

app.get('/', (req, res) => {
   res.send("Hello world!");
});

const port = process.env.PORT || 3001;

app.listen(port, "0.0.0.0" , () => {
    console.log(`Server is running on http://localhost:${port}`);
});
