const express = require("express");
const { registerUser, loginUser, getUserTickets } = require("../controllers/usercontrollers");

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id/tickets', getUserTickets);

module.exports = router;