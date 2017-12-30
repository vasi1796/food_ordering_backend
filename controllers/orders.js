import Order from '../models/order';
import moment from 'moment';
import mongoose from 'mongoose';

export const index1 = (req, res, next) => {
  var new_product = new Order(req.body);
  new_product.save(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
};

export const index2 = (req, res, next) => {
  // Find all movies and return json response
  Order.find().lean().exec((err, orders) => res.json(
    // Iterate through each movie
    { orders: orders.map(order => ({
      ...order,
    }))}
  ));
};

export const index3 = (req, res) => {

  var orderId_query = req.params.orderId;
  var orderId = orderId_query.match(/\d/g);
  orderId = orderId.join("");
  var ticketNo=parseInt(orderId);
  console.log(ticketNo);
  Order.findOne({ticket:ticketNo}, function(err, product) {

    if (err)

      res.send(err);

    res.json(product);

  });

};