const csrf = require('csurf');
const db = require('../db/models');

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req,res,next) => handler(req,res,next).catch(next);

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

const getSingleWheelhouse = async (id, status) => {
    const wheelhouse = await db.Wheelhouse.findOne({
        where: {
            userId: id,
            status: status
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

module.exports = {
    csrfProtection,
    asyncHandler,
    getSingleWheelhouse,
    getAllWheelhouses,
}
