require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('./../models/Order');


//---------------------------------------------------------





//---------------------------------------------------------


let mongoURI = process.env.MONGO_URL;
mongoose.connect(mongoURI, { useNewUrlParser: true });


router.get('/', function(req, res) {
  res.send('Necessity is the mother of invention.');
});


// router.get('/get', function (req, res, next) {
//   let reqParams = {};
//   if(typeof req.body.owner !== 'undefined') reqParams["owner"] = req.body.owner;
//   if(typeof req.body.delivery_address !== 'undefined') reqParams["delivery_address"] = req.body.delivery_address;
//   if(typeof req.body.contact !== 'undefined') reqParams["contact"] = req.body.contact;
//   if(typeof req.body.message !== 'undefined') reqParams["message"] = req.body.message;
//   if(typeof req.body.data !== 'undefined') reqParams["data"] = req.body.data;
//   if(typeof req.body.status !== 'undefined') reqParams["status"] = req.body.status;
//   mongoose.model('Order').find(reqParams, function(err, orders) {
//     if(err) {
//       console.log(err)
//       res.send('ERR')
//     }
//     res.send(orders)
//   });
// });


router.post('/add', function(req, res) {
  let addParams = {};
  if(typeof req.body.owner !== 'undefined') addParams["owner"] = req.body.owner;
  if(typeof req.body.delivery_address !== 'undefined') addParams["delivery_address"] = req.body.delivery_address;
  if(typeof req.body.contact !== 'undefined') addParams["contact"] = req.body.contact;
  if(typeof req.body.message !== 'undefined') addParams["message"] = req.body.message;
  if(typeof req.body.data !== 'undefined') addParams["data"] = req.body.data;
  if(typeof req.body.status !== 'undefined') addParams["status"] = req.body.status;
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

