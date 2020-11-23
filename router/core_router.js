const express = require("express");
const User = require("../../../node-course/task-manager/src/models/user");

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

const { signUp } = require("../controllers/auth"); 

core_router.post("/signin", signUp) 

module.exports = core_router