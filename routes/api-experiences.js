const express = require('express');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

const router = express.Router();

router.get('/:experienceId', asyncHandler(async (req, res) => {
    
}));

module.exports = router;
