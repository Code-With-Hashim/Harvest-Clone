const express = require('express')
const passport = require('passport')
const { userSignup, userLogin, googleAuthCallback} = require('../controllers/user.controller')
const { passportAuthSuccessMiddleware } = require('../middlewares/passportAuth.middleware')



const userRoutes = express.Router()

userRoutes.post('/signup', userSignup)

userRoutes.post('/login', userLogin)

userRoutes.get('/google' , 
passport.authenticate('google', { scope: ['profile', 'email'] })
)

userRoutes.get("/google/callback" , passportAuthSuccessMiddleware(passport) , googleAuthCallback)

module.exports = { userRoutes }
