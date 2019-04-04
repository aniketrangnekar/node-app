//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello awesome" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello awesome');
});
//listen to port 4000 by default
app.listen(process.env.PORT || 4000);
 
module.exports = app;

