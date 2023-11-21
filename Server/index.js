var express = require("express");
const cors = require('cors');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');

var app = express();
var port = 5000
app.use(cors());


const DB = 'mongodb+srv://wakte_krishna:Yk5yD8U2izEkrQ5k@cluster007.plymrwx.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).then(() => {
    console.log("Connection succesfull");
}).catch((err) => console.log("No Connection"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var users = require('./routes/users');
var usersModel = require('./models/users.model');

app.use('/users', users)

app.get('/getData', function (req, res) {
    console.log("Hello World");
    res.send("hello World");
})

app.listen(port)