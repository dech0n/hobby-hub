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

// create user hobby
router.post('/:wheelhouseId/hobby/:hobbyId', asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    const wheelhouseId = +req.params.wheelhouseId;
    const hobbyId = +req.params.hobbyId;

    // query for wheelhouses that matches user id
    const userWheelhouses = await db.Wheelhouse.findAll({
        where: { userId }
    });
    // create array of wheelhouse ids
    const userWheelhouseIds = userWheelhouses.map(wh => {
        return wh.dataValues.id;
    });

    // find userHobby in wheelhouses
    let userHobby = await db.UserHobby.findOne({
        where: {
            wheelhouseId: userWheelhouseIds,
            hobbyId
        },
        include: db.Wheelhouse
    });

    // if exists, update wheelhouse Id to whichever status user chooses
    if (userHobby) {
        await userHobby.update({ wheelhouseId });
        userHobby = await db.UserHobby.findOne({
            where: {
                id: userHobby.dataValues.id
            },
            include: db.Wheelhouse
        });
        res.json({ userHobby });
    } else {
        // else create new userhobby
        userHobby = await db.UserHobby.create({
            wheelhouseId,
            hobbyId,
        });
        res.json({ userHobby });
    }
    res.end();
}));

module.exports = router
