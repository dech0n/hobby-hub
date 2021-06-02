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

router.get("/:hobbyId(\\d+)", asyncHandler(async(req, res) => {
    const hobbyId = parseInt(req.params.hobbyId, 10);
    const hobby = await db.Hobby.findByPk(hobbyId, { include: db.Experience });
    console.log(hobby);

    res.render('hobby', { title: `Hobby: ${hobby.title}`, hobby });
}));

module.exports = router;
