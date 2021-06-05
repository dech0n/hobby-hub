const express = require('express');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

const router = express.Router();

// get all resources of a given hobby

const getResources = async (hobbyId) => {
    return await db.Resource.findAll({where: { hobbyId }})
}

router.get(
    "/hobbies/:hobbyId",
    asyncHandler(async (req, res) => {
        const userId = req.session.auth.userId;
        const hobbyId = req.params.hobbyId;
        const resources = await db.Resource.findAll({
            where: {
                hobbyId
            }
        })
        console.log('GOT HERE----------', resources)
      res.json({ resources });
    })
);

// // post a new resource
// router.post(
//     "/hobbies/:hobbyId",
//     asyncHandler(async (req, res) => {
//       const userId = req.session.auth.userId;
//       const hobbyId = req.params.hobbyId;
//       const {title, link} = req.body.message;
//       console.log(title, link);
//       const resource = await db.Resource.create({
//           hobbyId,
//           userId,
//           title,
//           link
//       });
//       res.json({ resource });
//     })
// );

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
