const express = require('express');
const db = require('../db/models')
const { asyncHandler } = require('./utils.js');

const router = express.Router();

//Wheelhouse Api Routes::

const getAllWheelhouses = async (id) => {
    const wheelhouses = await db.Wheelhouse.findAll({ 
        where: {
            userId: id
        }
    })
    return wheelhouses
}

const getAllUserHobbies = async (id) => {
    const userHobbies = await db.UserHobby.findAll({
        where: {
            wheelhouseId: id
        }
    })
    return userHobbies
}

router.get('/all', asyncHandler(async(req, res) => {
    const userId = req.session.auth.userId
    const wheelhouses = await getAllWheelhouses(userId)
    const userHobbies = await wheelhouses.map(async (wheelhouse) => {
        let res = await getAllUserHobbies(wheelhouse.id)
        return res
    })
    
    res.send(userHobbies)
}))



module.exports = router
