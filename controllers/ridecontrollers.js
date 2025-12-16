const Ride = require('../models/Ride');

const createRide = async (req, res) => {
  try {
    const newRide = new Ride(req.body);
    const savedRide = await newRide.save();
    res.status(201).json(savedRide);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRides = async (req, res) => {
  try {
    const rides = await Ride.find({ isActive: true });
    res.json(rides);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRideById = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id);
    if (!ride) {
      return res.status(404).json({ error: 'Ride not found' });
    }
    res.json(ride);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRide = async (req, res) => {
  try {
    const updatedRide = await Ride.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRide) {
      return res.status(404).json({ error: 'Ride not found' });
    }
    res.json(updatedRide);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createRide, getRides, getRideById, updateRide };