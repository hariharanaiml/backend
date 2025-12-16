const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['thrill', 'family', 'kids', 'water'],
    required: true
  },
  adultPrice: {
    type: Number,
    required: true
  },
  childPrice: {
    type: Number,
    required: true
  },
  seniorPrice: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  minHeight: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Ride', rideSchema);