const express = require("express");
const bcrypt = require("bcryptjs");
const { loginUser, logoutUser } = require("../auth.js");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils.js");
const { check, validationResult } = require("express-validator");

const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const registerValidators = [
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Please enter your first name")
    .isLength({ max: 50 })
    .withMessage("First name cannot be more than 50 characters long."),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Please enter your last name")
    .isLength({ max: 50 })
    .withMessage("Last name cannot be more than 50 characters long."),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please enter your email address.")
    .isEmail({ checkFalsy: true })
    .withMessage("Please enter a valid email address.")
    .isLength({ max: 50 })
    .withMessage("Email address cannot be more than 50 characters long.")
    .custom((email) => {
      return db.User.findOne({ where: { email } }).then((user) => {
        if (user) return Promise.reject("Email address already in use.");
      });
    }),
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a username.")
    .isLength({ max: 50 })
    .withMessage("Username cannot be more than 50 characters long.")
    .custom((username) => {
      return db.User.findOne({ where: { username } }).then((user) => {
        if (user)
          return Promise.reject(
            "Username unavailable, please try something different."
          );
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please enter a password.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      "Password must contain uppercase letter, lowercase letter, a number, and a special character."
    ),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please confirm your password.")
    .custom((confirmPassword, { req }) => {
      if (confirmPassword !== req.body.password)
        throw new Error("Please make sure your passwords match");
      return true;
    }),
];

router.get(
  "/register",
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const user = db.User.build({
      firstName: null,
      lastName: null,
      email: null,
      username: null,
      password: null,
    });
    res.render("register", {
      title: "Register",
      csrfToken: req.csrfToken(),
      user,
      req
    });
  })
);

router.post(
  "/register",
  registerValidators,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, password, username, email } = req.body;
    const user = db.User.build({ firstName, lastName, username, email });
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      const userId = req.session.auth.userId;
      await db.Wheelhouse.create ({
        status: 'Want to Learn',
        userId
      })
      await db.Wheelhouse.create ({
        status: 'Currently Learning',
        userId
      })
      await db.Wheelhouse.create ({
        status: 'Accomplished',
        userId
      })
      res.redirect("/hobbies");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("register", {
        title: "Register",
        user,
        errors,
        csrfToken: req.csrfToken(),
        req,
      });
    }
  })
);

router.get(
  "/login",
  csrfProtection,
  asyncHandler(async (req, res) => {
    res.render("login", {
      title: "Login",
      csrfToken: req.csrfToken(),
      req,
    });
  })
);

const loginValidators = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide your username."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide your password."),
];

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({
        where: { username },
      });

      if (user !== null) {
        const isPassword = await bcrypt.compare(
          password,
          user.hashedPassword.toString()
        );

        if (isPassword) {
          loginUser(req, res, user);
          return res.redirect("/hobbies");
        }
      }
      errors.push("Invalid username or password.");
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render("login", {
      title: "Login",
      username,
      errors,
      csrfToken: req.csrfToken(),
      req,
    });
  })
);

router.get(
  "/:id/wheelhouse",
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const wheelhouses = await db.Wheelhouse.findAll({
      where: {
        userId,
      },
    });

    res.render("wheelhouse", {
      title: "My Wheelhouse",
      wheelhouses,
      req
    });
  })
);

router.get("/logout", (req, res) => {
  logoutUser(req, res);
  res.redirect("/");
});

module.exports = router;
