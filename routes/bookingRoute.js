const express = require('express');
const router = express.Router();
// const fetch = require('node-fetch');
const Booking = require('../models/bookingModel');

router.post('/', async (req, res) => {
  try {
    const response = await fetch('https://api-ap-south-1.hygraph.com/v2/cltzfhkx10ko908uhkf0cgpie/master', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query Bookings {
            bookings {
              createdAt
              id
              publishedAt
              updatedAt
              userEmail
              userName
              date
              time
            }
          }
        `
      }),
    });

    const data = await response.json();
    const bookings = data.data.bookings;

    await Booking.insertMany(bookings);

    console.log('Bookings saved to MongoDB');
    
    res.status(200).json({ message: 'Bookings fetched and saved successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching and saving bookings.' });
  }
});

module.exports = router;