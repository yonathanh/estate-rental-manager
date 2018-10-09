require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");

const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");

const app = express();

// for login passport
const session = require("express-session");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// User model
const User = require("./models/User");

//.connect('mongodb://localhost/estate-rental-manager', {useNewUrlParser: true})
mongoose
  .connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// default value for title local
app.locals.title = "estate-rental-manager";

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "https://estate-rental-manager.herokuapp.com"
    ]
  })
);

// Express View engine setup
app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

// for the flash messeges
const flash = require("connect-flash");
//for login passport
app.use(flash());

app.use(
  session({
    secret: "our-passport-local-strategy-app",
    resave: true,
    saveUninitialized: true
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

passport.use(
  new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(null, false, { message: "Incorrect username" });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, { message: "Incorrect password" });
      }

      return next(null, user, { message: "Logged In" });
    });
  })
);

app.use(passport.initialize());
app.use(passport.session());
// ====== end login passport

//========= make use of public in packend side
const favicon = require("serve-favicon");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// ================= Not need for react

//const hbs = require("hbs");
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "hbs");

//======== used for saving user in the views
// to use the user logged in, information in every page
// app.use(function(req, res, next) {
//   res.locals.user = req.user;
//   next();
// });
// ================== End  Not need for react

//------------------  All Routs

//======================  Api rout
//--------  login routs
const authRoutes = require("./routes/auth-routes");
app.use("/api", authRoutes);

//--------  Main rout
const index = require("./routes/index-routes");
app.use("/api", index);

//--------- user rout
const user = require("./routes/user-routes");
app.use("/api", user);

//--------- user property
const property = require("./routes/property-routes");
app.use("/api", property);

//--------- user lease
const lease = require("./routes/lease-routes");
app.use("/api", lease);

//---------------- React Rout
app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
