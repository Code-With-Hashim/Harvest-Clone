const jwt = require('jsonwebtoken')

const authMiddleWare = async (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1]

    const decoded = token && jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {

        if (err) return res.status(401).json({ message: "You're not authorised for this action" })

        return decoded
    });

    if (decoded) {
        req.userId = decoded.userId
        next()
    } else {
        return res.status(401).send({ message: 'Please login to access the endpoint' })
    }

}

module.exports = { authMiddleWare }