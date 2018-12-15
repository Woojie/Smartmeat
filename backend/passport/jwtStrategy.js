const passportJWT = require("passport-jwt")
const User = require('../database/models/user')

const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy   = passportJWT.Strategy;

const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
const jwtStrategy = new JwtStrategy(opts, function(jwt_payload, done) {
    console.log('hello?')
  console.log("jwt:", jwt_payload)
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false)
        }
        if (user) {
            console.log(user)
            return done(null, user)
        } else {
            return done(null, false)
            // or you could create a new account
        }
    });
})

module.exports = jwtStrategy