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

// Root route - API info
app.get('/', (req, res) => {
  res.json({
    message: 'Inventory API is running',
    version: '1.0.0',
    endpoints: {
      'GET    /inventory':      'Get all inventory items',
      'POST   /inventory':      'Add a new item',
      'PUT    /inventory/:id':  'Update an existing item',
      'DELETE /inventory/:id':  'Delete an item',
    },
  });
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
