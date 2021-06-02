const express = require("express");
const db = require("../db/models");
const { asyncHandler } = require("./utils.js");
const { check, validationResult } = require("express-validator");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const hobbies = await db.Hobby.findAll();
    res.render("hobbies", {
      title: "Hobbies",
      hobbies,
    });
  })
);

router.get(
  "/:hobbyId(\\d+)",
  asyncHandler(async (req, res) => {
    const user = req.session.auth;
    // const user = await db.User.findbyPk(userId, {
    //   include: db.Wheelhouse,
    // });
    if (user) {
      user.wheelhouses = await db.Wheelhouse.findAll({
        where: { userId: user.userId },
      });
    }

    const hobbyId = parseInt(req.params.hobbyId, 10);
    const hobby = await db.Hobby.findByPk(hobbyId, { include: db.Experience });
    const experiences = await db.Experience.findAll({
      where: { hobbyId: hobby.id },
      include: db.User,
    });

    res.render("hobby", {
      title: `Hobby: ${hobby.title}`,
      user,
      // wheelhouses,
      hobby,
      experiences,
    });
  })
);

module.exports = router;
