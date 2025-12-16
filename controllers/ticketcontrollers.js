const Ticket = require('../models/Ticket');
const User = require('../models/User');

const createTicket = async (req, res) => {
  try {
    console.log('Creating ticket:', req.body);
    const newTicket = new Ticket(req.body);
    const savedTicket = await newTicket.save();
    
    // Link ticket to user if email provided
    if (req.body.email) {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        user.tickets.push(savedTicket._id);
        await user.save();
      }
    }
    
    res.status(201).json(savedTicket);
  } catch (error) {
    console.error('Create ticket error:', error);
    res.status(500).json({ error: error.message });
  }
};

const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.json(ticket);
  } catch (error) {
    console.error('Get ticket error:', error);
    res.status(500).json({ error: error.message });
  }
};

const updateTicket = async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTicket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.json(updatedTicket);
  } catch (error) {
    console.error('Update ticket error:', error);
    res.status(500).json({ error: error.message });
  }
};

const cancelTicket = async (req, res) => {
  try {
    const cancelledTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled' },
      { new: true }
    );
    if (!cancelledTicket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    res.json(cancelledTicket);
  } catch (error) {
    console.error('Cancel ticket error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTicket, getTickets, getTicketById, updateTicket, cancelTicket };