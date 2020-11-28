const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        required: true
    },
    // field:{
    //     type:Array,
    //     required:true
    // },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    /*
    password2: {
        type: String,
        required: true,
        trim: true,
    }
    */

})

const User = mongoose.model('User', UserSchema);
module.exports = User;

/*
User.create = (newuser, result) => {
    newuser.save(function(err, newuser) {
        if (err) {
            console.log("error");
            result(err, null);
            return;
        } else {
            console.log("done");
            result(null);
            return;
        }
    });
}
*/


