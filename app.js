const express = require("express");
const app = express();

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/commit-db', {
    useNewUrlParser: true,
    useCreateIndex: true
})

app.set("view engine", "ejs");
app.set("views", "./html");
app.use(express.static(__dirname + "/assets"))

const core_router = require("./router/core_router");
const lecture_router = require("./router/lecture_router");
const user_router = require("./router/user_router");
const teacher_router = require("./router/teacher_router");
const { default: validator } = require("validator");

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        required: true
    },
    field: {
        type: Array,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid!');
            }
        }
    }
})

const Teacher = mongoose.model('Teacher', {
    name: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    }
})

const Lecture = mongoose.model('Lecture', {
        title: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        teacher: {
            type: String,
            lowercase: true,
            required: true,
            trim: true
        },
        student: {
            type: Number,
            required: true,
        }
    })
    // const lect=new Lecture({
    //     title:'mongodb',
    //     teacher:'Seojin',
    //     student:3
    // })

// lect.save().then(()=>{
//     console.log(lect)
// }).catch((error)=>{
//     console.log('Error!',error);
// })
// const me = new User({
//     name: 'June',
//     age: 24,
//     field:['math','coding','ai'],
//     email:'lovekwon200@gmail.com'
// })

// const teach=new Teacher({
//     name:'seoryeong',
//     subject:'Chat-bot'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// teach.save().then(()=>{
//     console.log(teach)
// }).catch((error)=>{
//     console.log('Error!',error)
// })

/*
cmd에서 bin 폴더까지 간 다음, mongodb 명령어로 디비 켜고, cmd 창 하나 더 켜서 mongo 명령어로  서버 켜기
*/

app.use("/", core_router);
app.use("/lecture", lecture_router);
app.use("/user", user_router);
app.use("/teacher", teacher_router);

const PORT = 3010;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
    console.log(`Click [ http://localhost:${PORT}/ ] to join server`);
})