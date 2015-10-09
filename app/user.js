var s = require('./schema');

exports.list = function(req, res){
  s.User.find(function (err, user) {
     if(err) { // 404
     
     } else {
       res.json(user);
     }
  });
};

