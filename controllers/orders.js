import Order from '../models/order';
import moment from 'moment';

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