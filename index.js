// Import required modules
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from a .env file
dotenv.config();

// Initialize the Express app
const app = express();

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());


console.log("h")
// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
