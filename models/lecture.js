const mongoose = require('mongoose')
const validator = require('validator')

const LectureSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    field: {
        type: Array,
        required: true
    },
    url: {
        type: String,
        required: true
    }

})

LectureSchema.path('url').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

const Lecture = mongoose.model('Lecture', LectureSchema);
module.exports = Lecture;