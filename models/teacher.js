const mongoose = require('mongoose')
const validator = require('validator')

const TeacherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    field:{
        type:Array,
        required:true
    }
})

const Teacher = mongoose.model('Teacher', TeacherSchema);
module.exports = Teacher;