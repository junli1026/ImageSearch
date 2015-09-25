var users = [
  { name: 'jun', email: 'xx@yy' },
  { name: 'yang', email: 'xx@yy' }
];

exports.list = function(req, res){
  res.json({'users':users });
};

exports.get = function(req, res, next){
  var id = req.params.id;
  req.user = users[id];
  if (req.user) {
    next();
  } else {
    var err = new Error('cannot find user ' + id);
    err.status = 404;
    next(err);
  }
};
