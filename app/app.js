var express = require('express');
var user = require('./user');

var app = express();



app.get('/v1/users', user.list);
app.get('/v1/user/:id', user.get);
//app.put('/v1/user/:id', user.update);
//app.post('/v1/user', user.create);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
