const express = require('express');
// Import index action from movies controller
const index  = require('./controllers/movies');

// Initialize the router
const router = express.Router();

// Handle /movies.json route with index action from movies controller
router.route('/movies.json')
  .get(index);

module.exports =  router;
