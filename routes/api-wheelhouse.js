const express = require('express');
const db = require('../db/models')
const { asyncHandler, getSingleWheelhouse, getAllWheelhouses } = require('./utils.js');

const router = express.Router();

//Wheelhouse Api Routes::

router.get('/all', asyncHandler(async(req, res) => {
    try {
    const userId = req.session.auth.userId
    const wheelhouses = await getAllWheelhouses(userId)
    const userHobbies = wheelhouses.map(wheelhouse => {
        return wheelhouse.UserHobbies
    })
    const hobbies = [];
    userHobbies.forEach(userHobby => {
        userHobby.forEach(ele => {
            hobbies.push(ele.Hobby)
        })
    })

    res.send(hobbies)
    } catch (e) {
        res.send(e.message)
    }
}))


router.get('/wantToLearn', asyncHandler(async(req, res) => {
    try {
    const userId = req.session.auth.userId
    const status = 'Want to Learn'
    const wheelhouse = await getSingleWheelhouse(userId, status)
    const hobbies = wheelhouse.UserHobbies.map(userHobby => {
        return userHobby.Hobby
    })
    res.send(hobbies)
    } catch (e) {
        res.send(e.message)
    }
}))

router.get('/currentlyLearning', asyncHandler(async(req, res) => {
    try {
    const userId = req.session.auth.userId
    const status = 'Currently Learning'
    const wheelhouse = await getSingleWheelhouse(userId, status)
    const hobbies = wheelhouse.UserHobbies.map(userHobby => {
        return userHobby.Hobby
    })
    // console.log('---------------------',hobbies) //! for testing purposes only
    res.send(hobbies)
    } catch (e) {
        res.send(e.message)
    }
}))

router.get('/accomplished', asyncHandler(async(req, res) => {
    try {
    const userId = req.session.auth.userId
    const status = 'Accomplished'
    const wheelhouse = await getSingleWheelhouse(userId, status)
    const hobbies = wheelhouse.UserHobbies.map(userHobby => {
        return userHobby.Hobby
    })
    res.send(hobbies)
    } catch (e) {
        res.send(e.message)
    }
}))

router.post('/:wheelhouseId/hobby/:hobbyId', asyncHandler(async (req, res) => {
    // create user hobby
    const userId = req.session.auth.userId;
    const wheelhouseId = req.params.wheelhouseId;
    const hobbyId = req.params.hobbyId;

    const userHobby = await db.UserHobby.findOne({
        where: {
            wheelhouseId,
            hobbyId
        }
    });

    if (!userHobby) {
        const newHobby = await db.UserHobby.create({
            wheelhouseId,
            hobbyId,
        });
        res.json({ newHobby });
    }
    res.end();
}));

module.exports = router
