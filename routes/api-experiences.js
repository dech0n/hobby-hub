const express = require('express');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

const router = express.Router();

// get all experiences of a given hobby
router.get('/hobbies/:hobbyId', asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    const hobbyId = req.params.hobbyId;
    const allExperiences = await db.Experience.findAll({ where: { hobbyId } });

    res.json({ allExperiences });
}));

// get one experience
router.get('/:experienceId', asyncHandler(async (req, res) => {
    //
}));

// post a new experience
router.post('/hobbies/:hobbyId', asyncHandler(async (req, res) => {
    // debugger
    const userId = req.session.auth.userId;
    const hobbyId = req.params.hobbyId;
    const message = req.body.message;
    console.log(message)
    // debugger
    const experience = await db.Experience.create({
        hobbyId,
        userId,
        message
    });
    res.json({ experience });
}));

// update a given experience
router.put('/:experienceId', asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;

}));

// delete a given experience
router.delete('/:experienceId', asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;

}));

module.exports = router;
