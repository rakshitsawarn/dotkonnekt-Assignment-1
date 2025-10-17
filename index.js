const express = require('express');
const app = express();
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('✅ DotKonnekt Task Scheduler API is running!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
