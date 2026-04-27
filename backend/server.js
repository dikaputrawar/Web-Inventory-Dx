const express = require('express');
const cors = require('cors');

const inventoryRoutes = require('./routes/inventory');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/inventory', inventoryRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is running');
});

// 404 handler - unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found.`,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
