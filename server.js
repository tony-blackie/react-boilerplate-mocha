var express = require('express');
var app = express();
var path = require('path');

app.get('/users', (req, res) => {
    res.send(path.join(__dirname + '/app/fixtures/data/users.json'));
});