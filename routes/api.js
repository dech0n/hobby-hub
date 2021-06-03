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

const getSingleWheelhouse = async (id) => {
    const wheelhouse = await db.Wheelhouse.findOne({
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
    return wheelhouse;
}

router.get('/wantToLearn', asyncHandler(async(req, res) => {
    try {
    const userId = req.session.auth.userId
    const wheelhouse = await getSingleWheelhouse(userId)
    
    res.send(wheelhouse)
    } catch (e) {
        res.send(e.msg)
    }
}))



module.exports = router
