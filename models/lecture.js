const mongoose = require('mongoose')
const validator = require('validator')

const LectureSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    field:{
        type:Array,
        required:true
    }  

})

const Lecture = mongoose.model('Lecture', LectureSchema);
module.exports = Lecture;