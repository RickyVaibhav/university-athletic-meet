const { Announcement } = require('../models');

const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.findAll();
        res.json(announcements);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching announcements' });
    }
};

const createAnnouncement = async (req, res) => {
    try {
        const { title, content } = req.body;
        const announcement = await Announcement.create({ title, content });
        res.json(announcement);
    } catch (error) {
        res.status(500).json({ error: 'Error creating announcement' });
    }
};

module.exports = { getAllAnnouncements, createAnnouncement };
