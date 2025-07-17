// Import Required Packages
const express = require('express');


// Import Route Handlers (Functions)
const welcome = require('./functions/welcome');
const signup = require('./functions/signup');
const login = require('./functions/login');


// Import Restaurant API Handlers
const {
  createRestaurant,
  getRestaurants,
  updateRestaurant,
  deleteRestaurant
} = require('./functions/restaurant');

// This will initialize Express App
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


// Basic Route
app.get('/', welcome);


// Authentication Routes
app.post('/signup', signup);
app.post('/login', login);


// Restaurant CRUD APIs 
app.post('/restaurants', createRestaurant);
app.get('/restaurants', getRestaurants);
app.put('/restaurants/:id', updateRestaurant);
app.delete('/restaurants/:id', deleteRestaurant);


// This will start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
