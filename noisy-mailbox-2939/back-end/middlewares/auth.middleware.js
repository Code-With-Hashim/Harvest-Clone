const jwt = require('jsonwebtoken');
const { userModel } = require('../models/user.models');

const authMiddleWare = async (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1]

    const decoded = token && jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {

        if (err) return res.status(401).json({ message: "Token is not correct , Please pass correct token" })

        return decoded
    });

    try {

        if (decoded) {
            const isValidUser = await userModel.findOne({
                $or: [
                    { oauthid: decoded.userId },
                    { id: decoded.userId }
                ]
            })

            if (isValidUser) {
                req.userId = decoded.userId
                next()
            } else {
                return res.status(401).json({ message: "You're not Authorized for this action" })
            }
            
        } else {
        return res.status(401).json({ message: "Please login to access the API endpoint" })

        }

    } catch (error) {
        console.log(error)
    }

}

module.exports = { authMiddleWare }