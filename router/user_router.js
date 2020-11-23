const express = require("express")
const user_router = express.Router()
var controller = require('../controllers/auth')

user_router.get('/', (req, res) => res.render('index'))

user_router.get("/", (req, res) => {
    res.render("mypage.ejs")
});

user_router.get('/', controller.renderjoinform);
user_router.post('/signin', controller.createuser);


module.exports = user_router