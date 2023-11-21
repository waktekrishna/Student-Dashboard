const mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    name: String,
    email: String,
    gender: String
});

var UsersModel = mongoose.model("Users", usersSchema)

module.exports = UsersModel;