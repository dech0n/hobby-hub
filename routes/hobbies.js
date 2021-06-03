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
    if (req.session.auth) {
      user = await db.User.findByPk(req.session.auth.userId, {
        include: db.Wheelhouse,
      });
      if (user) {
        // !.isEmpty?
        user.wheelhouses = await db.Wheelhouse.findAll({
          where: { userId: user.id },
        });
      }
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
      hobby,
      experiences,
      req,
    });
  })
);

module.exports = router;
