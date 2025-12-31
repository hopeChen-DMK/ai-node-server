const express = require('express');
const { User } = require('../models');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to the Node.js web server demo!',
    availableRoutes: [
      '/api/health - Health check',
      '/api/users - Sample user data',
      'POST /api/users - Create a new user'
    ]
  });
});

// Export the router
module.exports = router;