const passport = require('passport')

const LocalStrategy = require('./localStrategy')
const User = require('../database/models/user')
const JwtStrategy = require('./jwtStrategy')

// passport.serializeUser((user, done) => {
// 	console.log('*** serializeUser called ')
// 		done(null, { _id: user._id })
// })


// passport.deserializeUser((id, done) => {
// 	console.log('DeserializeUser called')
// 	User.findOne(
// 		{ _id: id },
// 		'username',
// 		(err, user) => {done(null, user)}
// 	)
// })

passport.use(LocalStrategy)
// passport.use(JwtStrategy)

module.exports = passport
