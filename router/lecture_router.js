const express = require("express")

const lecture_router = express.Router();

lecture_router.get("/", (req, res) => {
    res.render("lectures.ejs", { id: 1 })
})
lecture_router.get("/:id", (req, res) => {
    res.render("lectures.ejs", { id: req.params.id });
})

lecture_router.get("/single/:id", (req, res) => {
    res.render("lecture.ejs")
})

module.exports = lecture_router