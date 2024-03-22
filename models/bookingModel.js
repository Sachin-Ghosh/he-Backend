const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  createdAt: Date,
  id: String,
  publishedAt: Date,
  updatedAt: Date,
  userEmail: String,
  userName: String,
  date: Date,
  time: String
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;