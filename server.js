var express = require('express');
var app = express();
var path = require('path');

const PORT = 3000;
const usersPath = path.join(__dirname + '/app/fixtures/data/users.json');
const users = require(usersPath);

app.use(express.static(__dirname + '/app/templates/index.html'));

app.get('/users', (req, res) => {
    console.log(`Serving json with ${users}`);
    // res.send(users);
    res.send('Hello World');
});

console.log(`Server is listening on port ${PORT}`);
app.listen(PORT);