const { Announcement } = require('../models');

const getAllAnnouncements = async (req, res) => {
  const announcements = await Announcement.findAll();
  res.json(announcements);
};

const createAnnouncement = async (req, res) => {
  const { title, content } = req.body;
  const announcement = await Announcement.create({ title, content });
  res.json(announcement);
};

// Add other controller methods like update and delete

module.exports = { getAllAnnouncements, createAnnouncement };
