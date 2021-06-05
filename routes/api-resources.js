const express = require('express');
const db = require('../db/models');
const { asyncHandler } = require('./utils');

const router = express.Router();

// get all resources of a given hobby
router.get(
    "/hobbies/:hobbyId",
    asyncHandler(async (req, res) => {
      const userId = req.session.auth.userId;
      const hobbyId = req.params.hobbyId;
      const allResources = await db.Resource.findAll({ where: { hobbyId } });
  
      res.json({ allResources, userId });
    })
);

// post a new resource
router.post(
    "/hobbies/:hobbyId",
    asyncHandler(async (req, res) => {
      const userId = req.session.auth.userId;
      const hobbyId = req.params.hobbyId;
      const {title, link} = req.body.message;
      console.log(message);
      const resource = await db.Resource.create({
          hobbyId,
          userId,
          message
      });
      res.json({ experience });
    })
  );

module.exports = router;
