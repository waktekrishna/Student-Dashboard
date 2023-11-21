var express = require('express');
const mongoose = require('mongoose');

var router = express.Router();
const UsersModel = require('../models/users.model');

router.post('/add', async function (req, res) {
    try {

        const formData = req.body;
        console.log("Recieved Data", formData);
        const newUser = new UsersModel({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender
        });

        const result = await newUser.save();
        res.send({ status: 200, message: 'User Added successfully', studentObj: result });
    } catch (err) {
        res.status(500).send({ status: 500, message: 'Error adding user', error: err });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await UsersModel.find();
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'})
    }
});

module.exports = router;
