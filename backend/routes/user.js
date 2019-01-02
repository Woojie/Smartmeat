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
        res.json({error:"incorrect token exists"})
        }   
        res.json(user)
    })

})

router.get('/allReports', (req, res, next) => {
  let reports = []
  let altReports = []
  User.find({}, (err, user)=> {

    user.forEach((user)=>{
        
      reports = reports.concat(user.reports)
      altReports = altReports.concat(user.alteredReports)
    })
    let allReports = {
        reports,
        altReports
    }
    res.send(allReports)
  }) 

})

router.post('/login', function (req, res, next) {
    passport.authenticate('local', {
        session: false
    }, (err, user, info) => {
        if (err || !user) {
            return res.json({
                message: info
                    ? info.message
                    : 'Login failed',
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
            return res.json({user, token});
        });
    })(req, res);

});

router.put('/report', (req, res) => {
    const {report, email} = req.body
    User.findOneAndUpdate({
        email: email
    }, {
        reports: report
    }, {
        new: true
    }, (err, user) => {
        if (err) {
            return res
                .status(5000.)
                .send(err)
        }

        res.send(user)
    })
})

router.put('/alterReport', (req, res) => {
    const {oldReport, newAlteredReports, email, } = req.body
    User.findOneAndUpdate({
        email: email
    }, {
        alteredReports: newAlteredReports
    }, {
        new: true
    }, (err, user) => {
        if (err) {
            return res
                .status(5000.)
                .send(err)
        }

        res.send(user)
    })
})

router.get('/check', passport.authenticate('jwt', {session: false}), (req, res) => {

    return res.json({user: req.user})
})

router.post('/', (req, res) => {
    const {email, password} = req.body
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    User.findOne({
        email
    }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({error: `Sorry, ${email} already has an account, trying logging in!`})
        } else if (!emailRegex.test(email)) {

            res.json({emailError: `Sorry ${email} is not an email`})
        } else {
             const newUser = new User({email, password})
            newUser.save((err, savedUser) => {
                if (err) 
                    return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

module.exports = router