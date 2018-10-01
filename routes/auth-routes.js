const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const uploadCloud = require("../config/cloudinary.js");
const nodemailer = require("nodemailer");
// BCrypt to encrypt passwords
const bcrypt = require("bcryptjs");
const bcryptSalt = 10;

// User model
const User = require("../models/User");

/* GET signup  page */
// router.get("/signup", (req, res, next) => {
//   res.render("auth/signup");
// });

//-------- sign up function

// username: String,
// password: String,
// email: String,
// name: String,
// phone: Number,
// address: String,
// googleID: String,
// imageUrl: String,
// imgName: String,
// imgPath: String,
// contracts: Array,
// Properties: Array

router.post("/signup", (req, res, next) => {
  const userObject = {
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    imageUrl: req.body.imageUrl,
    contracts: req.body.contracts,
    Properties: req.body.Properties
  };
  if (req.file) {
    userObject.imgName = req.file.originalname;
    userObject.imgPath = req.file.url;
  }

  //----------- validate that all three fields are correctly filled up
  if (
    userObject.username === "" ||
    userObject.password === "" ||
    userObject.email === ""
  ) {
    res
      .status(400)
      .json({ message: "Provide username password and eMail to sign up" });
    return;
  }

  //--------- check  if the indicated username is already defined
  User.findOne({ username: userObject.username }).then(user => {
    if (user !== null) {
      res.status(400).json({
        errorMessage: "The username already exists"
      });
      return;
    }

    // --------  using nodemailer to send and get eMails
    // let transporter = nodemailer.createTransport({
    //   service: 'Gmail',
    //   auth: {
    //     user: process.env.appsGmailAccount,
    //     pass: process.env.gmailPassword
    //   }
    // });

    // transporter.sendMail({
    //   from: '"My Awesome Project 👻" <myawesome@project.com>',
    //   to: email,
    //   text: message,
    //   html: `<b>${message}</b>`

    // });

    //------------------- continue after validations
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(userObject.password, salt);

    userObject.password = hashPass;

    const newUser = new User(userObject);

    newUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      }

      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(newUser, err => {
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }

        // Send the user's information to the frontend
        // We can use also: res.status(200).json(req.user);
        res.status(200).json(newUser);
      });
    });
  });
}); //--------- End sign up function

//---------  login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      // We are now logged in (that's why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

//---------  logout
router.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

router.get("/loggedin", (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

//-------- GOOGLE Log In routs
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/plus.login",
      "https://www.googleapis.com/auth/plus.profile.emails.read"
    ]
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/"
  })
);

//-------- GOOGLE Log In function
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.google_client_id,
      clientSecret: process.env.google_client_secret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      //console.log("=-=-=-=-=-=-=-=-",profile.emails[0].value);  // to see all what google profile sends the web app
      //console.log("-=-=-=-=-=-=-=-=-=",profile.photos[0].value)
      User.findOne({ googleID: profile.id })
        .then((user, err) => {
          if (err) {
            return done(err);
          }
          if (user) {
            return done(null, user);
          }

          const newUser = new User({
            username: profile.displayName,
            imageUrl: profile.photos[0].value,
            email: profile.emails[0].value,
            googleID: profile.id
          });

          newUser.save().then(user => {
            done(null, newUser);
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  )
); //--------- End GOOGLE Log In function

// must use form in html for post!
//================================================
/* GET /user edit page */
router.get("/profile/:id", (req, res, next) => {
  //console.log("===========-----------",req.params.id);
  User.findById(req.params.id)
    .then(theUser => {
      res.render("auth/profile", { user: theUser });
    })
    .catch(err => {
      next(err);
    });
});

/*   rout sent, after using form action */
router.post(
  "/profile/update/:id",
  uploadCloud.single("photo"),
  (req, res, next) => {
    console.log("---------------------------------------", req.file);

    //----------------------------------- user example
    // const userSchema = new Schema({
    // username: String,
    // password: String,
    // email: String,
    // name: String,
    // phone: Number,
    // address: String,
    // googleID: String,
    // imageUrl: String,
    // imgName: String,
    // imgPath: String,
    // contracts: Array,
    // Properties: Array

    //need to figure out how to not chnage password if leave empty and change with hash if change

    const userObject = {
      username: req.body.username,
      email: req.body.email,
      imageUrl: req.body.imageUrl
    };
    if (req.body.password) {
      userObject.password = req.body.password;
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(userObject.password, salt);

      userObject.password = hashPass;
    }
    if (req.file) {
      userObject.imgName = req.file.originalname;
      userObject.imgPath = req.file.url;
    }

    User.findByIdAndUpdate(req.params.id, userObject)
      .then(response => {
        res.redirect("/");
      })
      .catch(err => {
        next(err);
      });
  }
); /*   End Editing A User page */

module.exports = router;
