import mongoose from 'mongoose';
import Menu from './menu';

const menu = [
  {
    title: 'Ciorba de burta',
    price: '8',
    ingredients: 'Morcovi, cartofi',
    alergens:'ceva',
  },
  {
    title: 'Tocanita de pui',
   price: '10',
    ingredients: 'Morcovi, cartofi',
    alergens:'ceva',
  },
  {
    title: 'Ecler',
    price: '3',
    ingredients: 'Morcovi, cartofi',
    alergens:'ceva',
  },
  {
    title: 'Ciocanele de pui',
    price: '5',
    ingredients: 'Morcovi, cartofi',
    alergens:'ceva',
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/menu');

// Go through each movie
menu.map(data => {
  // Initialize a model with movie data
  const menu = new Menu(data);
  // and save it into the database
  menu.save();
});