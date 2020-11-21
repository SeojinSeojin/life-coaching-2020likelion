const User = require("../models/user");
var db = require('../db');
const { urlencoded } = require("body-parser");

exports.createuser = (req, res) => {
    var user = new User();
    user.name = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.password2 = req.body.password2;

    User.create(user,(err, user)=>{
        if(err){
            console.error(err);
            res.status(404).send({
                message: "이미 가입되어 있습니다"
            });
        }
        else{
            res.status(300).send({
                message: "register success"
            })
        }
    });
};