const express = require('express');
const { getAllAnnouncements, createAnnouncement } = require('../controllers/announcementController');
const router = express.Router();

router.get('/', getAllAnnouncements);
router.post('/', createAnnouncement);

// Add other routes like update and delete

module.exports = router;
