const express = require("express");
const db = require("../db/models");
const { asyncHandler } = require("./utils.js");

const router = express.Router();

router.get(
    "/all",
    asyncHandler(async (req, res) => {
        try {
            const users = await db.User.findAll();
            res.send(users);
        } catch (e) {
            res.send(e.msg);
        }
    })
);

router.get(
    "/loggedInUser",
    asyncHandler(async (req, res) => {
        try {
            const userId = req.session.auth.userId
            const user = await db.User.findByPk(userId, {
                include: [db.Wheelhouse, db.Experience],
            })
            res.send(user);
        } catch (e) {
            res.send(e.msg);
        }
    })
);

module.exports = router;
