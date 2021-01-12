const mongoose = require('mongoose')
const validator = require('validator')

var postSchema = new mongoose.Schema({
	email: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type:String, 
        required:true
    },
    body: {
        type:String, 
        required:true
    },
    createdAt: {
        type:Date, 
        default:Date.now
    }
});

Post = mongoose.model('post', postSchema);
module.exports = Post;