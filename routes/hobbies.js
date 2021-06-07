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
      req,
    });
  })
);

router.get(
  "/:hobbyId(\\d+)",
  asyncHandler(async (req, res) => {
    let user;

    const hobbyId = parseInt(req.params.hobbyId, 10);
    const hobby = await db.Hobby.findByPk(hobbyId, { include: db.Experience });
    const experiences = await db.Experience.findAll({
      where: { hobbyId: hobby.id },
      include: db.User,
    });

    if (req.session.auth) {
      user = await db.User.findByPk(req.session.auth.userId, {
        include: db.Wheelhouse,
      });
      if (user) {
        user.wheelhouses = await db.Wheelhouse.findAll({
          where: { userId: user.id },
        });
        const wheelhouseIds = user.wheelhouses.map(wh => wh.id)
        const userHobby = await db.UserHobby.findOne({
          where: {
            hobbyId,
            wheelhouseId: wheelhouseIds
          },
          include: db.Wheelhouse
        });
        if (userHobby) {
          user.userHobbyWheelhouse = userHobby.Wheelhouse.status;
          user.userHobbyId = userHobby.id;
        }

        const experience = await db.Experience.findOne({
          where: { hobbyId, userId: user.id }
        });

        if (experience) {
          user.experience = true;
        }
      }
    }

    res.render("hobby", {
      title: `Hobby: ${hobby.title}`,
      user,
      hobby,
      experiences,
      req,
    });
  })
);

module.exports = router;
