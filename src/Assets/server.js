const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define route to serve products.json file
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'products.json'));
});

// Define route to serve JavaScript bundle (assuming it's named bundle.js)
app.get('/static/js/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bundle.js'));
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
