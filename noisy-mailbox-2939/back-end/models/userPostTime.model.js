const mongoose = require('mongoose')

const userPostTimeSchema = new mongoose.Schema({

    userId: String,
    clientProject: {type :String, required : true},
    clientBillable: {type :String, required : true},
    clientNotes: String,
    clientPostTime: {type : Number, required : true},
    startPostTime : {type : Number , required : true}

}, {
    versionKey: false,
    timestamps: true
})

const userPostTimeModel = mongoose.model('user-post-time', userPostTimeSchema)

module.exports = { userPostTimeModel }