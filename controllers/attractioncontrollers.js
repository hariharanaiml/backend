const Attraction = require('../models/Attraction');

const createAttraction = async (req, res) => {
  try {
    const newAttraction = new Attraction(req.body);
    const savedAttraction = await newAttraction.save();
    res.status(201).json(savedAttraction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find();
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAttractionById = async (req, res) => {
  try {
    const attraction = await Attraction.findById(req.params.id);
    if (!attraction) {
      return res.status(404).json({ error: 'Attraction not found' });
    }
    res.json(attraction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAttraction = async (req, res) => {
  try {
    const updatedAttraction = await Attraction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAttraction) {
      return res.status(404).json({ error: 'Attraction not found' });
    }
    res.json(updatedAttraction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAttraction = async (req, res) => {
  try {
    const deletedAttraction = await Attraction.findByIdAndDelete(req.params.id);
    if (!deletedAttraction) {
      return res.status(404).json({ error: 'Attraction not found' });
    }
    res.json({ message: 'Attraction deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createAttraction, getAttractions, getAttractionById, updateAttraction, deleteAttraction };