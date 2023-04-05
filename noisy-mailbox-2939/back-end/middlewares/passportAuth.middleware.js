
const passportAuthSuccessMiddleware = (passport) => passport.authenticate('google', { 
    successRedirect: false , failureRedirect: 'http://localhost:3000/signup' ,  
 })

module.exports = { passportAuthSuccessMiddleware }

