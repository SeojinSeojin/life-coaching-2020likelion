const express = require("express");
const authController = require("../controllers/auth");
const User = require("../models/user");

const core_router = express.Router();

core_router.get("/", (req, res) => {
    res.render("index.ejs")
})

core_router.get("/about", (req, res) => {
    res.render("about.ejs")
})

core_router.get("/login", (req, res) => {
    res.render("login.ejs")
})

core_router.get("/signin", (req, res) => {
    res.render("signin.ejs")
})

core_router.post('/signin', function(req, res) {
    authController.createuser(req, res);
});

core_router.post('/login', function(req, res) {
    authController.loginuser(req, res);
});

core_router.get("/qna", (req, res) => {
    res.render("qna.ejs")
})

core_router.get("/review", (req, res) => {
    res.render("review.ejs")
})

module.exports = core_router;