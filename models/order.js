import mongoose, { Schema } from 'mongoose';

// Define movie schema
var orderSchema = new Schema({
  ticket:{
  	type:String,
  	unique:true,
  },
  title: {
    type: String,
  },
  price: String,
});

// Export Mongoose model
export default mongoose.model('order', orderSchema);