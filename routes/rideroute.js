const express = require("express");
const { createRide, getRides, getRideById, updateRide } = require("../controllers/ridecontrollers");

const router = express.Router();

router.post('/', createRide);
router.get('/', getRides);
router.get('/:id', getRideById);
router.put('/:id', updateRide);

module.exports = router;