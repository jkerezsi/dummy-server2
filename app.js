'use strict';

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3012;

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.post('/login', (req, res) => {
    res.json({status:'ok', token:'sshfhiwueriuy329y4iuwhhskjfhsdf9873243298'})
});

app.post('/register', (req, res) => {
    res.json({status: "error", message: "username already taken"})
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});
