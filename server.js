import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

// Connect to MongoDB
mongoose.connect('mongodb://localhost/menu');

// Initialize http server
const app = express();


// Require body-parser (to receive post data from clients)

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

// Logger that outputs all requests into the console
app.use(morgan('combined'));
// Use v1 as prefix for all API endpoints
app.use('/v1', router);


const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});