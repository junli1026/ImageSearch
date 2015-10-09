var express = require('express');
var mongoose = require('mongoose');
var user = require('./user');
var dbUri = "mongodb://52.88.122.91:27017/test";

//{ setting database

var connect = function () {
  mongoose.connect(dbUri);
}
connect();
mongoose.connection.once('open', function() { console.log("mongodb connection open"); });
mongoose.connection.on('error', function(err) { console.log(err.message); });
mongoose.connection.on('disconnected', connect);

//}

//{ setting webserver

var app = express();
app.get('/', function(req, res) { res.send("hello"); });
app.get('/v1/users', user.list);
//app.get('/v1/user/:id', user.get);

var server = app.listen(80, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

//}

