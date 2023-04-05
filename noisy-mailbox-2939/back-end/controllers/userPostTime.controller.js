const { userPostTimeModel } = require('../models/userPostTime.model')

const userPostTime = async (req, res) => {
    const { clientProject, clientBillable, clientNotes, clientPostTime, startPostTime } = req.body


    // console.log(clientPostTime)

    try {

        const isSuccess = await userPostTimeModel.create({
            userId: req.userId,
            clientProject,
            clientBillable,
            clientNotes,
            clientPostTime,
            startPostTime
        })
        // console.log(success)

        res.json({ message: 'Successfully Added the Time' })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Something wrong , please try after some time' })
    }
}

async function userGetTime(req, res) {
    try {

        const isExistUserTimeData = await userPostTimeModel.find({ userId: req.userId })

        if (isExistUserTimeData.length > 0) {
            return res.json(isExistUserTimeData)
        } else {
            return res.status(400).json({ message: "You don't have any Time list" })
        }

    } catch (error) {

        console.log(error)
        res.status(400).json({ message: 'Something wrong , please try after some time' })

    }
}

async function userEditTime(req, res) {

    const { id } = req.params
    // console.log(id)
    let { clientProject, clientBillable, clientNotes, clientPostTime, startPostTime } = req.body
    let clearTime = null

    if (clientProject === '') clientProject = undefined
    if (clientBillable === '') clientBillable = undefined
    if (clientNotes === '') clientNotes = undefined
    if (clientPostTime === '') clientPostTime = undefined
    if (startPostTime === '') startPostTime = undefined




    try {

        if (startPostTime) {
            clearTime = setInterval(async () => {
                startPostTime = startPostTime - 1
                if (startPostTime < 0) {
                    return clearInterval(clearTime)
                } else {
                    const data = await userPostTimeModel.findByIdAndUpdate({ _id: id }, {
                        clientBillable,
                        clientNotes,
                        clientPostTime,
                        clientProject,
                        startPostTime
                    })
                }
                // console.log(startPostTime)
            }, 1000)
        }
        
         if (clearTime) res.json({ message: 'Time is Edit Successfully'  , time : startPostTime})

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Something wrong , please try after some time' })
    }
}

const userDeleteTime = async (req, res) => {

    const { id } = req.params

    try {

        await userPostTimeModel.findByIdAndDelete({ id: id })

        return res.json({ message: 'The Time Post successfully Deleted' })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Something wrong , please try after some time' })
    }
}

module.exports = {
    userDeleteTime,
    userPostTime,
    userEditTime,
    userGetTime
}