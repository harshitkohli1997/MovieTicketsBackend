const express = require('express');
// Import index action from movies controller
const index  = require('./controllers/stations');

// Initialize the router
const router = express.Router();

// Handle /movies.json route with index action from movies controller
router.route('/station.json')
  .get(index);
// router.post('/book', (req,res) => {

// });
module.exports =  router;
