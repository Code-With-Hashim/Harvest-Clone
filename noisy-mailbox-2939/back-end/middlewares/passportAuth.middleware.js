
const passportAuthSuccessMiddleware = (passport) => passport.authenticate('google', { failureRedirect: 'http://localhost:3000/signup' })

module.exports = { passportAuthSuccessMiddleware }

