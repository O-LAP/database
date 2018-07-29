require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('./../models/User');


//---------------------------------------------------------


// ref: https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
};


//---------------------------------------------------------


let mongoURI = `mongodb://app:abcd1234@ds143451.mlab.com:43451/o-lap`;
mongoose.connect(mongoURI);


router.get('/', function(req, res) {
  res.send('Falsity in intellectual action is intellectual immorality.');
});


router.get('/get', function (req, res, next) {
  let reqParams = {};
  if(typeof req.query.id !== 'undefined') reqParams["_id"] = req.query.id;
  if(typeof req.query.first_name !== 'undefined') reqParams["first_name"] = req.query.first_name;
  if(typeof req.query.last_name !== 'undefined') reqParams["last_name"] = req.query.last_name;
  if(typeof req.query.group !== 'undefined') reqParams["group"] = req.query.group;
  mongoose.model('User').find(reqParams, function(err, users) {
    if(err) {
      console.log(err)
      res.send('ERR')
    }
    res.send(users)
  });
});


router.post('/add', function(req, res) {
  let addParams = {};

  if(typeof req.query.first_name !== 'undefined') addParams["first_name"] = req.query.first_name;
  if(typeof req.query.last_name !== 'undefined') addParams["last_name"] = req.query.last_name;
  if(typeof req.query.email !== 'undefined') addParams["email"] = req.query.email;
  if(typeof req.query.password !== 'undefined') addParams["password"] = req.query.password.hashCode();
  let group = req.query.group;
  User.create(addParams,
              function(err, user) {
                                    if(err) {
                                      console.log(err);
                                      res.send('ERR');
                                      return;
                                    }
                                    user.groups.push(group);
                                    user.save(function(err, userG) {
                                      res.send(userG);
                                    });
                                  }
             );
});


module.exports = router;

