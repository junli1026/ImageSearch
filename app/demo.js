var mongoose = require('mongoose');
var s = require('./schema');

var mongoURI = "mongodb://52.88.122.91:27017/test";
var conn = mongoose.connect(mongoURI).connection;
conn.on('error', function(err) { console.log(err.message); });
conn.once('open', function() {
  console.log("mongodb connection open");
  test();
});
function test() {
  var user = new s.User();
  user.name = "lijun";
  user.save(function(err) {
    if(err) {
      console.log('save failed');
      console.log(err);
    } else {
      console.log('save success');
    }
  });
  s.User.find({name:"lijun"},function(err, user) {
    if(err) {
      console.log("error");
    } else {
      console.log(user);  
      console.log('find success');  
    }
  });
}
