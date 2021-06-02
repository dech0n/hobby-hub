const express = require('express');
const db = require('../db/models');
const { asyncHandler } = require('./utils.js');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const user = db.User.findOne({
        where: {}
    })
    const hobbies = await db.Hobby.findAll();
    res.render('hobbies', {
        title: 'Hobbies',
        hobbies,
    })
}))


module.exports = router;
