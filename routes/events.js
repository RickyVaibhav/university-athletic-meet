const express = require('express');
const { getAllEvents, createEvent } = require('/controllers/eventController');
const router = express.Router();

router.get('/', getAllEvents);
router.post('/', createEvent);

// Add other routes like update and delete

module.exports = router;
