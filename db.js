const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/commit-db', {
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
    console.log("open");
})