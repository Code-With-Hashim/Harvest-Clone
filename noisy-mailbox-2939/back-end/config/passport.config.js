const jwt = require('jsonwebtoken')
const { userModel } = require('../models/user.models')
const { default: mongoose } = require('mongoose')

const GoogleStrategy = require('passport-google-oauth20').Strategy

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY,
        callbackURL: 'http://localhost:8080/auth/google/callback',
        scope: ['profiel', 'email'],
        state: true
    },
        async function (accessToken, refreshToken, profile, done) {


            try {

                // _json: {
                //     sub: '117867750386794478467',
                //     name: 'Hashim Khan',
                //     given_name: 'Hashim',
                //     family_name: 'Khan',
                //     picture: 'https://lh3.googleusercontent.com/a/AGNmyxZ7jGu_CtNdfyQxzYk0y_Dgni-fL-k86HE2zWx2Mg=s96-c',
                //     email: 'hashim.khan83029@gmail.com',
                //     email_verified: true,
                //     locale: 'en'
                //   }
                const isExistUser = await userModel.findOne({email : profile._json.email})

                if (isExistUser) {
                    const token = jwt.sign({ userId: isExistUser.oauthid }, process.env.SECRET_KEY)
                    return done(null, { token: token })
                } else {
                    await userModel.create({
                        oauthid : profile._json.sub,
                        email : profile._json.email,
                        avatar : profile._json.picture,
                        fullName : {
                            firstName : profile._json.given_name,
                            lastName : profile._json.family_name
                        },
                        oauthProvider : 'google'

                    })
                    const token = jwt.sign({ userId: profile._json.sub }, process.env.SECRET_KEY)
                    return done(null, { token: token })
                }



            } catch (error) {
                console.log(error)
            }

            //    return done(null , {token : token})

        }
    ))

    passport.serializeUser((user, done) => {
        // done(null, user);
        done(null, user.token)
    });

    passport.deserializeUser((token, done) => {
        done(null, token);


    });
}