const express = require("express");
const app = express();

require('./mongoose')
const User = require('./models/user')

app.set("view engine", "ejs");
app.set("views", "./html");
app.use(express.static(__dirname + "/assets"))

const core_router = require("./router/core_router");
const lecture_router = require("./router/lecture_router");
const user_router = require("./router/user_router");
const teacher_router = require("./router/teacher_router");
const { default: validator } = require("validator");

app.use("/", core_router);
app.use("/lecture", lecture_router);
app.use("/user", user_router);
app.use("/teacher", teacher_router);
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

const PORT = 3010;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
    console.log(`Click [ http://localhost:${PORT}/ ] to join server`);
})
