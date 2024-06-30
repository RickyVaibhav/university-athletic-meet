const { Captain } = require('../models');

const getAllCaptains = async (req, res) => {
  const captains = await Captain.findAll();
  res.json(captains);
};

const createCaptain = async (req, res) => {
  const { name, hostel } = req.body;
  const captain = await Captain.create({ name, hostel });
  res.json(captain);
};

// Add other controller methods like update and delete

module.exports = { getAllCaptains, createCaptain };
