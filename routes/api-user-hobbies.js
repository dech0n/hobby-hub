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

router.delete('/:userId/:userHobbyId', asyncHandler(async (req, res) => {
  const id = req.params.userHobbyId;
  const userId = req.params.userId;
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', userId)
  const userHobby = await db.UserHobby.findByPk(id);
  try {
    await db.Resource.destroy({
      where: {
        hobbyId: userHobby.hobbyId,
        userId
      }
    });
    await db.UserHobby.destroy({
      where: {
        id
      }
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // const id = req.params.resourceId
  // await db.Resource.destroy({ where: { id }});
  // res.json({ ok: true });


}));

module.exports = router;
