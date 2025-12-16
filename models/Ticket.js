const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  rideId: {
    type: String,
    required: true
  },
  rideName: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  visitDate: {
    type: Date,
    required: true
  },
  ticketType: {
    type: String,
    enum: ['adult', 'child', 'senior'],
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['booked', 'cancelled', 'used'],
    default: 'booked'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);