const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { sequelize } = require("./db/models");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const hobbiesRouter = require("./routes/hobbies");
const apiWheelhouseRouter = require("./routes/api-wheelhouse");
const apiUsersRouter = require("./routes/api-users");
const apiExperiencesRouter = require("./routes/api-experiences");
const apiResourcesRouter = require("./routes/api-resources");
const apiUserHobbiesRouter = require("./routes/api-user-hobbies");
const { restoreUser } = require("./auth.js");

// import created session secret from index.js config file
const { sessionSecret } = require("./config/index");

const app = express();

// view engine setup
app.set("view engine", "pug");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, "public")));

const store = new SequelizeStore({ db: sequelize });

// set up session middleware
app.use(
  session({
    name: "hobby_hub.sid",
    store,
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(restoreUser);
//debug middleware
// app.use((req, res, next) => {
//   debugger;
//   next();
// });
// app.use(
//   session({
//     secret: 'superSecret',
//     store,
//     saveUninitialized: false,
//     resave: false,
//   })
// );

// create Session table if it doesn't already exist
store.sync();

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/hobbies", hobbiesRouter);
app.use("/api/wheelhouse", apiWheelhouseRouter);
app.use("/api/users", apiUsersRouter);
app.use("/api/experiences", apiExperiencesRouter);
app.use("/api/resources", apiResourcesRouter);
app.use("/api/userHobbies", apiUserHobbiesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
