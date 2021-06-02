const express = require('express');
const db = require('../db/models')
const { asyncHandler } = require('./utils.js');

const router = express.Router();

//Wheelhouse Api Routes::

const getAllWheelhouses = async (id) => {
    const wheelhouses = await db.Wheelhouse.findAll({ 
        where: {
            userId: id
        },
        include: [{
            model: db.UserHobby,
            include: [{
                model: db.Hobby
            }]
        }]
    })
    return wheelhouses
}

router.get('/all', asyncHandler(async(req, res) => {
    try {
    const userId = req.session.auth.userId
    const wheelhouses = await getAllWheelhouses(userId)
    
    res.send(wheelhouses)
    } catch (e) {
        res.send(e.msg)
    }
}))



module.exports = router
