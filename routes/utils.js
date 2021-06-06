const csrf = require('csurf');
const db = require('../db/models');
const {
    check,
    validationResult
  } = require("express-validator");

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req,res,next) => handler(req,res,next).catch(next);

// Query database for all of a user's wheelhouses
const getAllWheelhouses = async (id) => {
    const wheelhouses = await db.Wheelhouse.findAll({
        where: {
            userId: id
        },
        order: [
          ['id', 'DESC'],
        ],
        include: [{
            model: db.UserHobby,
            include: [{
                model: db.Hobby
            }]
        }]
    })
    return wheelhouses
}

// Query database for a specific wheelhouse of a user
const getSingleWheelhouse = async (id, status) => {
    const wheelhouse = await db.Wheelhouse.findOne({
        where: {
            userId: id,
            status: status
        },
        include: [{
            model: db.UserHobby,
            include: [{
                model: db.Hobby
            }]
        }]
    })
    return wheelhouse;
}

// Validators for user registration
const registerValidators = [
    check("firstName")
    .exists({
      checkFalsy: true
    })
    .withMessage("Please enter your first name")
    .isLength({
      max: 50
    })
    .withMessage("First name cannot be more than 50 characters long."),
    check("lastName")
    .exists({
      checkFalsy: true
    })
    .withMessage("Please enter your last name")
    .isLength({
      max: 50
    })
    .withMessage("Last name cannot be more than 50 characters long."),
    check("email")
    .exists({
      checkFalsy: true
    })
    .withMessage("Please enter your email address.")
    .isEmail({
      checkFalsy: true
    })
    .withMessage("Please enter a valid email address.")
    .isLength({
      max: 50
    })
    .withMessage("Email address cannot be more than 50 characters long.")
    .custom((email) => {
      return db.User.findOne({
        where: {
          email
        }
      }).then((user) => {
        if (user) return Promise.reject("Email address already in use.");
      });
    }),
    check("username")
    .exists({
      checkFalsy: true
    })
    .withMessage("Please provide a username.")
    .isLength({
      max: 50
    })
    .withMessage("Username cannot be more than 50 characters long.")
    .custom((username) => {
      return db.User.findOne({
        where: {
          username
        }
      }).then((user) => {
        if (user)
          return Promise.reject(
            "Username unavailable, please try something different."
          );
      });
    }),
    check("password")
    .exists({
      checkFalsy: true
    })
    .withMessage("Please enter a password.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      "Password must contain uppercase letter, lowercase letter, a number, and a special character."
    ),
    check("confirmPassword")
    .exists({
      checkFalsy: true
    })
    .withMessage("Please confirm your password.")
    .custom((confirmPassword, {
      req
    }) => {
      if (confirmPassword !== req.body.password)
        throw new Error("Please make sure your passwords match");
      return true;
    }),
  ];

  // Validators for user login
  const loginValidators = [
    check("username")
    .exists({
      checkFalsy: true
    })
    .withMessage("Please provide your username."),
    check("password")
    .exists({
      checkFalsy: true
    })
    .withMessage("Please provide your password."),
  ];

module.exports = {
    csrfProtection,
    asyncHandler,
    getSingleWheelhouse,
    getAllWheelhouses,
    registerValidators,
    loginValidators,
}
