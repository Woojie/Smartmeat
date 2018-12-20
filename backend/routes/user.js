const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')
const jwt = require('jsonwebtoken')

router.post('/login', function (req, res, next) {
  passport.authenticate('local', {session: false}, (err, user, info) => {
      if (err || !user) {
          return res.json({
              message: info ? info.message : 'Login failed',
              user   : user
          });
      }

      req.login(user, {session: false}, (err) => {
          if (err) {
              res.send(err);
          }

          const token = jwt.sign(user.toJSON(), 'your_jwt_secret');
          return res.json({token});
      });
  })
  (req, res);

});

router.put('/report', (req, res) => {
  const { report, email} = req.body
  console.log("report:", report, "email:", email)
  User.findOneAndUpdate({email:email}, {reports: report}, {new:true},
    (err, user) => {
      if(err){
        return res.status(5000.).send(err)
      }
      console.log(user)
      res.send(user)
    })
})

router.get('/check', passport.authenticate('jwt', {session: false}), (req, res) => {
  console.log(req)
  return res.json({
    user: req.user
  })
})



router.post('/', (req, res) => {
  const { email, password } = req.body

  User.findOne({ email }, (err, user) => {
    if (err) {
      console.log('User.js post error: ', err)
    } else if (user) {
      res.json({
        error: `Sorry, ${email} already has an account, trying logging in!`
      })
    }else {
      console.log('hello')
      const newUser = new User({
        email,
        password,
      })

      newUser.save((err, savedUser) => {
        if (err) return res.json(err)
        res.json(savedUser)
      })
    }
  })
})

module.exports = router