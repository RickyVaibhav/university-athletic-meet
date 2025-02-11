const express = require('express');
const router = express.Router();
const { getAllEvents, createEvent } = require('../controllers/eventController');

router.get('/', getAllEvents);
router.post('/', createEvent);

// Add other routes like update and delete

module.exports = router;
