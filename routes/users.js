const express = require('express');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth.js');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { check, validationResult } = require('express-validator');
const {User} = require('../db/models');

const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const registerValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your first name')
    .isLength({ max: 50 })
    .withMessage('First name cannot be more than 50 characters long.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your last name')
    .isLength({ max: 50 })
    .withMessage('Last name cannot be more than 50 characters long.'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your email address.')
    .isEmail({ checkFalsy: true })
    .withMessage('Please enter a valid email address.')
    .isLength({ max: 50 })
    .withMessage('Email address cannot be more than 50 characters long.')
    .custom((emailAddress) => {
      return db.User.findOne({ where: { emailAddress } }).then((user) => {
        if (user) return Promise.reject("Email address already in use.");
      });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a password.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage('Password must contain uppercase letter, lowercase letter, a number, and a special character.'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please confirm your password.')
    .custom((confirmPassword, { req }) => {
      if (confirmPassword !== req.body.password)
        throw new Error("Please make sure your passwords match");
      return true;
    }),
];

router.get('/register', csrfProtection, asyncHandler(async(req,res,next) => {

  res.render('register', { title: 'Register', csrfToken: req.csrfToken(), user });
}))

router.post('/register', registerValidators, csrfProtection, asyncHandler(async (req, res) => {
  const { firstName, lastName, password, username, email } = req.body;

  const user = db.User.build(firstName, lastName, username, email);

  const validatorErrors = validationResult(req);

  if(validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req,res,user)
    res.redirect('/hobbies');
  } else {
    const errors = validationErrors.array().map(error => error.msg);
    res.render('register', {
      title: 'Register',
      user,
      errors,
      csrfToken: req.csrfToken()
    })
  }
}));

router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
  const user = await User.create({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    hashedPassword: "",
  })
  res.render('login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
    user
  })
}))

module.exports = router;
