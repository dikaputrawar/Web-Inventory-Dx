const express = require('express');
const router = express.Router();

const {
  getAllItems,
  addItem,
  updateItem,
  deleteItem,
} = require('../controllers/inventoryController');

// GET /inventory - Get all inventory items
router.get('/', getAllItems);

// POST /inventory - Add a new inventory item
router.post('/', addItem);

// PUT /inventory/:id - Update an existing item
router.put('/:id', updateItem);

// DELETE /inventory/:id - Delete an item
router.delete('/:id', deleteItem);

module.exports = router;
