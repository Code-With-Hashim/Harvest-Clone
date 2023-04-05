const userPostTimeRouter = require('express').Router()

const { userDeleteTime,
    userPostTime,
    userEditTime,
    userGetTime } = require('../controllers/userPostTime.controller')
const { authMiddleWare } = require('../middlewares/auth.middleware')

userPostTimeRouter.use(authMiddleWare)

userPostTimeRouter.post("/time", userPostTime)

userPostTimeRouter.get("/time" , userGetTime)

userPostTimeRouter.delete("/time" , userDeleteTime)

userPostTimeRouter.patch('/time/:id' , userEditTime)


module.exports = {userPostTimeRouter}