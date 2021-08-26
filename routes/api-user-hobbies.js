const express = require('express');
const db = require("../db/models");
const { asyncHandler } = require("./utils");

const router = express.Router();

router.get('/:hobbyId', asyncHandler(async (req, res) => {
  if (req.session.auth) {
    const userId = req.session.auth.userId;
    const hobbyId = req.params.hobbyId;
    const user = await db.User.findByPk(userId, { include: db.Wheelhouse });
    const wheelhouses = user.Wheelhouses.map(wh => wh.dataValues.id);
    const userHobby = await db.UserHobby.findOne({
      where: {
        hobbyId,
        wheelhouseId: wheelhouses
      },
      include: db.Wheelhouse
    });
    res.json({ user, userHobby });
  } else {
    res.json({});
  }
}));

router.delete('/:userHobbyId', asyncHandler(async (req, res) => {
  // const id = parseInt(req.params.userHobbyId, 10);
  const id = +req.params.userHobbyId;
  const userHobby = await db.UserHobby.findByPk(id);
  console.log('==============>BACKEND 1', userHobby.dataValues)
  await userHobby.destroy();
  console.log('==============>BACKEND 2')
  // console.log('-------------------->MADE IT<------------', userHobby)
  res.json({ id: "Made it" });
}));

module.exports = router;
