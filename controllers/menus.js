import Menu from '../models/menu';
import moment from 'moment';

export const index = (req, res, next) => {
  // Find all movies and return json response
  Menu.find().lean().exec((err, menus) => res.json(
    // Iterate through each movie
    { menus: menus.map(menu => ({
      ...menu,
    }))}
  ));
};