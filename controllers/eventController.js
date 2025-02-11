const Event = require('../models/event');

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching events' });
    }
};

const createEvent = async (req, res) => {
    try {
        const { name, date } = req.body;
        const event = await Event.create({ name, date });
        res.json(event);
    } catch (error) {
        res.status(500).json({ error: 'Error creating event' });
    }
};

// Add other methods like update and delete

module.exports = { getAllEvents, createEvent };
