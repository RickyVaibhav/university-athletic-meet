const express = require('express');
const router = express.Router();
const { getAllCaptains, createCaptain } = require('../controllers/captainController');

router.get('/', getAllCaptains);
router.post('/', createCaptain);

// Add other routes like update and delete

module.exports = router;
