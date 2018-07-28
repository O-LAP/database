require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('./../models/Order');


//---------------------------------------------------------





//---------------------------------------------------------


mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@ds143451.mlab.com:43451/o-lap`);


router.get('/', function(req, res) {
  res.send('Necessity is the mother of invention.');
});


router.get('/get', function (req, res, next) {
  let reqParams = {};
  if(typeof req.query.owner !== 'undefined') reqParams["owner"] = req.query.owner;
  if(typeof req.query.delivery_address !== 'undefined') reqParams["delivery_address"] = req.query.delivery_address;
  if(typeof req.query.contact !== 'undefined') reqParams["contact"] = req.query.contact;
  if(typeof req.query.message !== 'undefined') reqParams["message"] = req.query.message;
  if(typeof req.query.data !== 'undefined') reqParams["data"] = req.query.data;
  if(typeof req.query.status !== 'undefined') reqParams["status"] = req.query.status;
  mongoose.model('Order').find(reqParams, function(err, orders) {
    if(err) {
      console.log(err)
      res.send('ERR')
    }
    res.send(orders)
  });
});


router.post('/add', function(req, res) {
  let addParams = {};
  if(typeof req.query.owner !== 'undefined') addParams["owner"] = req.query.owner;
  if(typeof req.query.delivery_address !== 'undefined') addParams["delivery_address"] = req.query.delivery_address;
  if(typeof req.query.contact !== 'undefined') addParams["contact"] = req.query.contact;
  if(typeof req.query.message !== 'undefined') addParams["message"] = req.query.message;
  if(typeof req.query.data !== 'undefined') addParams["data"] = req.query.data;
  if(typeof req.query.status !== 'undefined') addParams["status"] = req.query.status;
  Order.create(addParams,
              function(err, order) {
                                    if(err) {
                                      console.log(err);
                                      res.send('ERR');
                                      return;
                                    }
                                    order.status = addParams.status;
                                    order.save(function(err, orderG) {
                                      res.send(orderG);
                                    });
                                  }
             );
});


module.exports = router;

