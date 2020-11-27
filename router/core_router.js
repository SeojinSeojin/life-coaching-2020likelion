const express = require("express");
const authController = require("../controllers/auth");

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

module.exports = core_router;