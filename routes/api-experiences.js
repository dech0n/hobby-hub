const express = require("express");
const db = require("../db/models");
const { asyncHandler } = require("./utils");

const router = express.Router();

// get all experiences of a given hobby
router.get(
  "/hobbies/:hobbyId",
  asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    const hobbyId = req.params.hobbyId;
    const allExperiences = await db.Experience.findAll({ where: { hobbyId } });

    res.json({ allExperiences, userId });
  })
);

// get one experience
router.get(
  "/:hobbyId",
  asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    const hobbyId = req.params.hobbyId;
    const experience = await db.Experience.findOne({
        where: {
            hobbyId,
            userId
        }
    });
    res.json({ experience });
  })
);

// post a new experience
router.post(
  "/hobbies/:hobbyId",
  asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    const hobbyId = req.params.hobbyId;
    const message = req.body.message;
    console.log(message);
    const experience = await db.Experience.create({
        hobbyId,
        userId,
        message
    });
    res.json({ experience });
  })
);

// update a given experience
router.put(
  "/:experienceId",
  asyncHandler(async (req, res) => {
    // const userId = req.session.auth.userId;
    const id = req.params.experienceId;
    const message = req.body.message;
    const post = await db.Experience.findByPk(id);
    const newPost = await post.update({
        message
    })
    res.json({ newPost });
  })
);

// delete a given experience
router.delete(
  "/:experienceId",
  asyncHandler(async (req, res) => {
    const id = req.params.experienceId
    await db.Experience.destroy({ where: { id }});
    res.json({ id: 'hello' });
  })
);

module.exports = router;
