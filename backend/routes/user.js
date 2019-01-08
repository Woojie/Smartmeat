const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')

const User = require('../database/models/user')
const passport = require('../passport')

router.get('/', (req, res, next) => {
  let token = jwt_decode(req.headers.authorization)

  User.findOne({
    email: token.email
  }, (err, user) => {
    if (user === null) {
      res.json({
        error: "incorrect token exists"
      })
    }
    res.json(user)
  })
})



router.post('/login', function (req, res, next) {
  passport.authenticate('local', {
    session: false
  }, (err, user, info) => {
    if (err || !user) {
      return res.json({
        message: info ?
          info.message :
          'Login failed',
        user: user
      });
    }

    req.login(user, {
      session: false
    }, (err) => {
      if (err) {
        res.send(err);
      }

      const token = jwt.sign(user.toJSON(), 'your_jwt_secret');
      return res.json({
        user,
        token
      });
    });
  })(req, res);

});




router.get('/check', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  return res.json({
    user: req.user
  })
})

router.post('/', (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName
  } = req.body

  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const passwordRegex = /(.*[a-z0-9]){5}/i
  const namesRegex = /^[^]+$/

  User.findOne({
    email
  }, (err, user) => {

    if (err) {
      console.log('User.js post error: ', err)
    } else if (user) {
      res.json({
        error: `Sorry, ${email} already has an account, trying logging in!`
      })
    } else if (!emailRegex.test(email) || !passwordRegex.test(password) || !namesRegex.test(firstName) || !namesRegex.test(lastName)) {
      res.json({
        emailError: emailRegex.test(email) ? undefined : `Sorry ${email} is not an email`,
        passwordError: passwordRegex.test(password) ? undefined : `Password must be at least 5 charcters`,
        namesError: namesRegex.test(firstName) && namesRegex.test(lastName) ? undefined : 'You must fill both name spaces!'
      })
    } else {

      const newUser = new User({
        email,
        password,
        firstName,
        lastName
      })
      newUser.save((err, savedUser) => {
        if (err)
          return res.json(err)
        res.json(savedUser)
      })
    }
  })
})

module.exports = router