const express = require("express");
const bcrypt = require("bcryptjs");
const {
  loginUser,
  logoutUser
} = require("../auth.js");
const db = require("../db/models");
const {
  csrfProtection,
  asyncHandler,
  getSingleWheelhouse,
  getAllWheelhouses,
  registerValidators,
  loginValidators,
} = require("./utils.js");
const {
  check,
  validationResult
} = require("express-validator");

const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

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
    const {
      firstName,
      lastName,
      password,
      username,
      email
    } = req.body;
    const user = db.User.build({
      firstName,
      lastName,
      username,
      email
    });
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      const userId = req.session.auth.userId;
      await db.Wheelhouse.create({
        status: 'Want to Learn',
        userId
      })
      await db.Wheelhouse.create({
        status: 'Currently Learning',
        userId
      })
      await db.Wheelhouse.create({
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


router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    const {
      username,
      password
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({
        where: {
          username
        },
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

router.post(
  '/loginDemo',
  asyncHandler(async (req, res) => {
    const demo = await db.User.findByPk(1)
    loginUser(req, res, demo);
    res.end();
  })
)

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

// ! Currently working on this path for the User Hobbies page. Working on querying everything before passing it to res.render
router.get('/:userId/wheelhouse/:status/user-hobby/:hobbyId', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.userId, 10)
  const hobbyId = parseInt(req.params.hobbyId, 10)
  const wheelhouseStatus = req.params.wheelhouseStatus

  const user = await db.User.findByPk(userId);

  const experiences = await db.Experience.findAll({
    where: {
      userId: user.id,
      hobbyId
    }
  });

  const resources = db.Resource.findAll({
    where: {
      userId: user.id,
      // needs userHobbyId?
    }
  })
  // get user's hobbies
  // const userHobbies = await db.Wheelhouse.findOne({
  //   where: {userId, wheelhouseStatus},
  //   include: db.UserHobby
  // })
  // console.log(userHobbies);
  res.render('user-hobby', {
    title: `My`,
    user,
    req
  })
}))

router.get("/logout", (req, res) => {
  logoutUser(req, res);
  res.redirect("/");
});

module.exports = router;
