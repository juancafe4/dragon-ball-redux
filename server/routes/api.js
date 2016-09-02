const express = require('express');
const router = express.Router();

router.use('/dragonball', require('./dragonball'));

module.exports = router;
