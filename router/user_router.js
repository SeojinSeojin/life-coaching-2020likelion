const express = require("express")
const user_router = express.Router()
var Controller = require('../controllers/auth')

//user_router.get('/', (req, res) => res.render('index'))

user_router.get("/", (req, res) => {
    res.render("mypage.ejs")
});

user_router.post('/signin', Controller.createuser);

user_router.post('/login', Controller.loginuser);


module.exports = user_router