const express = require("express")

const teacher_router = express.Router();

teacher_router.get("/", (req, res) => {
    res.render("강사 소개.ejs")
})

teacher_router.get("/qna", (req, res) => {
    res.render("qna.ejs")
})

module.exports = teacher_router