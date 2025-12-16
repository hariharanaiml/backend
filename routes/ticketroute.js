const express = require("express");
const { createTicket, getTickets, getTicketById, updateTicket, cancelTicket } = require("../controllers/ticketcontrollers");

const router = express.Router();

router.post('/', createTicket);
router.get('/', getTickets);
router.get('/:id', getTicketById);
router.put('/:id', updateTicket);
router.patch('/:id/cancel', cancelTicket);

module.exports = router;
