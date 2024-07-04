const Captain = require('../models/captain');

const getAllCaptains = async (req, res) => {
    try {
        const captains = await Captain.findAll();
        res.json(captains);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching captains' });
    }
};

const createCaptain = async (req, res) => {
    try {
        const { name, hostel } = req.body;
        const captain = await Captain.create({ name, hostel });
        res.json(captain);
    } catch (error) {
        res.status(500).json({ error: 'Error creating captain' });
    }
};

// Add other methods like update and delete

module.exports = { getAllCaptains, createCaptain };
