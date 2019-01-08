const express = require('express')
const router = express.Router()

const User = require('../database/models/user')


router.put('/deleteReport', (req, res) => {
  const {email, alteredUser} = req.body
  User.findOneAndUpdate({email}, alteredUser, {new:true}, (err, user)=> {
    if (err) {
      return res.status(5000).send(err)
    }
    console.log(user)
    res.send(user)
  })
})

router.put('/alterReport', (req, res) => {
  const {
    newAlteredReports,
    email,
  } = req.body
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


router.put('/report', (req, res) => {
  const {
    report,
    email
  } = req.body
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


router.get('/allReports', (req, res, next) => {
  let reports = []
  let altReports = []
  User.find({}, (err, user) => {

    user.forEach((user) => {

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

module.exports = router