var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('./../models/User');


mongoose.connect('mongodb://amit:@ds143451.mlab.com:43451/o-lap');


// mongoose.model('users', User);


router.get('/', function(req, res) {
  // User.create({first_name: "Albert", last_name: "Einstein"}, function(err, user) {
  //   res.send(user);
  // });
  res.send('Users');
});




router.post('/get-all', function(req, res, next) {
  mongoose.model('User').find(function(err, users) {
    if(err) {
      console.log(err)
      res.send('ERR')
      next()
    }
    res.send(users)
    next()
  });
  // res.send('OK');
});




// router.post('/get/:userId', function(req, res, next) {
//   mongoose.model('users').find({user: req.params.userId},
//                                   function(err, users) {
//                                   res.send(users);
//   });
//   res.send('OK');
// });



module.exports = router;
