const express = require('express')
const passport = require('passport')
const { userSignup, userLogin, googleAuthCallback, getUserDetail} = require('../controllers/user.controller')
const { passportAuthSuccessMiddleware } = require('../middlewares/passportAuth.middleware')
const { authMiddleWare } = require('../middlewares/auth.middleware')



const userRoutes = express.Router()

userRoutes.post('/signup', userSignup)

userRoutes.post('/login', userLogin)

userRoutes.get('/google' , 
passport.authenticate('google', { scope: ['profile', 'email'] , prompt: 'select_account' })
)

userRoutes.get("/google/callback" , passportAuthSuccessMiddleware(passport) , googleAuthCallback)

userRoutes.get('/user-detail' , authMiddleWare , getUserDetail)

module.exports = { userRoutes }
