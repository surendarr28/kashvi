var express = require('express');
var path = require('path');
var cors = require('cors');
var app = express();

app.use(express.static(path.resolve(__dirname, 'smartkiddiz')));
console.log(path.resolve(__dirname, 'smartkiddiz'));

app.get('/', function (req, res) {
   res.sendFile(path.resolve(__dirname, 'smartkiddiz/index.html'));
})
app.get('/mp31', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'kplay_back1.mp3'));
 })
app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 3000!')
})