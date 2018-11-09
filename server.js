var express = require('express');
var path = require('path');
var cors = require('cors');
var app = express();

app.use(express.static(path.resolve(__dirname, 'app/build')));
console.log(path.resolve(__dirname, 'app/build'));

app.get('/', function (req, res) {
   res.sendFile(path.resolve(__dirname, 'app/build/index.html'));
})
app.get('/mp31', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'kplay_back1.mp3'));
 })
app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!')
})