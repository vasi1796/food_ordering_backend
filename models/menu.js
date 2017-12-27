import mongoose, { Schema } from 'mongoose';

// Define movie schema
var menuSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  price: String,
  ingredients: String,
  alergens: String
});

// Export Mongoose model
export default mongoose.model('menu', menuSchema);