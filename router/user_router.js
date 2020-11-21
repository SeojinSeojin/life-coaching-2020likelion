const express = require("express")
const user_router = express.Router()
var controller = require('../controllers/signincontroller')

user_router.get('/', (req, res) => res.render('index'))

user_router.get("/", (req, res) => {
    res.render("mypage.ejs")
});

user_router.post('/create', controller.createuser)

module.exports = user_router