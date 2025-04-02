const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Express Demo API!',
    endpoints: {
      '/': 'This welcome message',
      '/hello': 'Get a greeting',
      '/echo': 'POST data to echo it back'
    }
  });
});

// Example route with parameter
app.get('/hello', (req, res) => {
  const name = req.query.name || 'World';
  res.json({
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString()
  });
});

// Example POST route
app.post('/echo', (req, res) => {
  res.json({
    message: 'Echo response',
    received: req.body,
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});