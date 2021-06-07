const express = require('express');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

const router = express.Router();

// get all resources of a given hobby
router.get(
    "/hobbies/:hobbyId",
    asyncHandler(async (req, res) => {
      if (req.session.auth) {
        const userId = req.session.auth.userId;
        // console.log("--------------->") // for testing only
        const hobbyId = req.params.hobbyId;
        const resources = await db.Resource.findAll({
            where: [{hobbyId},{userId}]
        })
        res.json({ resources });
      } else {
        res.json({});
      }
    })
);

// post a new resource
router.post(
    "/hobbies/:hobbyId",
    asyncHandler(async (req, res) => {
      const userId = req.session.auth.userId;
      const hobbyId = req.params.hobbyId;
      const {title, link} = req.body;
      await db.Resource.create({
          hobbyId,
          userId,
          title,
          link
      });
      // console.log('Got Here ------------------------------') //! for testing only
      const resources = await db.Resource.findAll({
        where: [{hobbyId},{userId}]
    })
      res.json({ resources });
    })
);

//   // delete a given resource
// router.delete(
//     "/:resourceId",
//     asyncHandler(async (req, res) => {
//       const id = req.params.resourceId
//       await db.Resource.destroy({ where: { id }});
//       res.json({ id: 'hello' });
//     })
// );

module.exports = router;
