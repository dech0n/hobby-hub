const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('DID WE GET HERE?')
  res.render('index', { title: 'Hobby Hub Home' });
});

module.exports = router;
