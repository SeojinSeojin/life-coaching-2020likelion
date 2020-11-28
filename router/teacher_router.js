const express = require("express")

const teacher_router = express.Router();

teacher_router.get("/", (req, res) => {
    res.render("강사 소개.ejs")
})

module.exports = teacher_router