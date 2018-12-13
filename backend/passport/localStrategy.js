const User = require('../database/models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		User.findOne({ username: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				console.log("localStrat: Wrong UserName")
				return done(null, false, { message: 'Incorrect username' })

			}
			if (!user.checkPassword(password)) {
				console.log("localStrat: Wrong Password")
				return done(null, false, { message: 'Incorrect password' })
			}
			console.log('user:', user)
			return done(null, user)
		})
	}
)

module.exports = strategy
