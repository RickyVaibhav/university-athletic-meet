const express = require('express');
const { getAllCaptains, createCaptain } = require('../controllers/captainController');
const router = express.Router();

router.get('/', getAllCaptains);
router.post('/', createCaptain);

// Add other routes like update and delete

module.exports = router;
