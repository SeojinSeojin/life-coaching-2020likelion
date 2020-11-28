const User = require("../models/user");
var db = require('../mongoose')

exports.createuser = (req, res) => {
    /*
    var user = new User();
    user.name = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.password2 = req.body.password2;

    User.create(user, (err, user) => {
        if (err) {
            console.error(err);
            res.status(404).send({
                message: "이미 가입되어 있습니다"
            });
        } else {
            console.log(`user ${user} register success!`)
            res.status(300).send({
                message: "register success"
            })
        }
    });
    */
    if (req.body.password !== req.body.password2) {
        res.redirect("/signin");
    } else {
        let newUser = new User({
            name: req.body.username,
            password: req.body.password,
            email: req.body.email,
            age: req.body.age
        })
        newUser.save(function(err) {
            if (err) {
                console.log(err);
                res.redirect("/signin")
            } else {
                console.log(`user ${newUser} created!`)
                res.redirect("/login")
            }
        })
    }
};


exports.loginuser = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) { 
            return res.json(err);
        } if (!user) {
            console.log('Cannot find user');
            res.send(`
                    <h1>해당 이메일을 찾을 수 없습니다.</h1>
                `);

        } else {
            User.findOne({ password: req.body.password })
                .exec((err, user) => {
                    if (err) return res.json(err);

                    if (!user) {
                        console.log('login failed');
                        res.send(`
                    <h1>비밀번호가 틀렸습니다</h1>
                `);
                    } else {
                        console.log('welcome');
                        res.redirect("/user");
                    }
                })
        }
      });
      
    
}
