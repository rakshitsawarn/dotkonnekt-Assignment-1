// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Import routes
const taskRoutes = require('./routes/tasks');

// Middleware to read JSON
app.use(express.json());

// Use the routes
app.use('/', taskRoutes);

// Default route
app.get('/', (req, res) => {
  res.send("Task Scheduler API is running. Use POST /schedule and GET /tasks");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
