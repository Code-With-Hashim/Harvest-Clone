const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { userModel } = require('../models/user.models');

const userSignup = async (req, res) => {

    const { email, password, fullName } = req.body;


    try {
        const isExistUser = await userModel.findOne({ email })

        if (isExistUser) return res.status(409).json({ message: 'User email is already exist' })

        // console.log(process.env.SALTROUNDS)


        bcrypt.hash(password, +process.env.SALTROUNDS, async (err, hash) => {
            if (err) return res.status(401).json({ message: 'Something is Wrong , Please try after some time' })

            userModel.create({ email, password: hash, fullName })
                .then(() => res.json({ message: 'Account is Created Successfully' }))
                .catch((err) => {
                    console.log(err)
                    res.status(400).json({ message: 'Something is Wrong , Please try after some time' })
                }
                )

        })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Something is Wrong , Please try after some time' })
    }
}

const userLogin = async (req, res) => {

    const { email, password } = req.body


    console.log(email, password)

    try {

        const correctUser = await userModel.findOne({ email })

        if (correctUser) {
            bcrypt.compare(password, correctUser.password, function (err, result) {

                const token = jwt.sign({ userId: correctUser._id }, process.env.SECRET_KEY);
                // result == true
                if (result) {
                    return res.json({ message: 'Login Successfully', token })
                } else {
                    return res.status(400).json({ message: 'Password is Incorrect' })
                }
            });
        } else {

            return res.status(401).json({ message: 'Mail ID is not exist in our database' })
        }


    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Something is Wrong , Please try after some time' })
    }
}

const googleAuthCallback = (req, res) => {
    // Redirect user to frontend with the JWT token as a cookie
    res.cookie('jwt-token', req.user.token);
    res.redirect('http://localhost:3000/harvest/signin');

}



module.exports = { userSignup, userLogin , googleAuthCallback }