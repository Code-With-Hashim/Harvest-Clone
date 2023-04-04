const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    avatar : String,
    email : {type : String , required : true , unique : true},
    password : {type : String , required : function () {
        return !this.oauthProvider
    }
    },
    fullName : {
        firstName : {type : String , required: true},
        lastName : {type : String , required : true}
    },
    oauthProvider: {
        type: String,
        enum: ['google'],
      },
    oauthid : String,
} , {
    versionKey : false,
    timestamps : true
})

const userModel = mongoose.model('user' , userSchema)

module.exports = {userModel}