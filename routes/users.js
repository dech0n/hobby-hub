const express = require('express');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth.js');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { check, validationResult } = require('express-validator');

const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//TODO: add username validation
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


router.get('/register', csrfProtection, asyncHandler(async (req, res, next) => {

  res.render('register', { title: 'Register', csrfToken: req.csrfToken(), user });
}))

router.post('/register', registerValidators, csrfProtection, asyncHandler(async (req, res) => {
  const { firstName, lastName, password, username, email } = req.body;

  const user = db.User.build(firstName, lastName, username, email);

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user)
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
  const user = await db.User.create({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    hashedPassword: "",
  });

  res.render('login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
    user
  });
}))

const loginValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide your username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide your password.')
];

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({
      where: { username: req.body.username }
    })

    if(user !== null) {
      const isPassword = await bcrypt.compare(req.body.hashedPassword, user.hashedPassword.toString())

      if (isPassword) {
        loginUser(req, res, user)
        return res.redirect('/hobbies')
      }
    }
    errors.push('Invalid username or password.')
  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('login', {
    title: 'Login',
    username,
    errors,
    csrfToken: req.csrfToken()
  });
}))

module.exports = router;
