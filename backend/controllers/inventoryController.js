const { inventoryData } = require('../data/inventoryData');

// Helper: get today's date in YYYY-MM-DD format
const getTodayDate = () => new Date().toISOString().split('T')[0];

// GET /inventory - Return all items
const getAllItems = (req, res) => {
  res.status(200).json({
    success: true,
    data: inventoryData,
  });
};

// POST /inventory - Add a new item
const addItem = (req, res) => {
  const { itemName, quantity, location, category } = req.body;

  // Basic validation
  if (!itemName || itemName.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'itemName is required.',
    });
  }

  const newItem = {
    id: Date.now(),
    itemName: itemName.trim(),
    quantity: quantity ?? 0,
    location: location ?? '',
    category: category ?? '',
    lastUpdated: getTodayDate(),
  };

  inventoryData.push(newItem);

  res.status(201).json({
    success: true,
    message: 'Item added successfully.',
    data: newItem,
  });
};

// PUT /inventory/:id - Update an existing item
const updateItem = (req, res) => {
  const id = Number(req.params.id);
  const index = inventoryData.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Item with id ${id} not found.`,
    });
  }

  const { itemName, quantity, location, category } = req.body;

  // Merge existing data with updated fields
  inventoryData[index] = {
    ...inventoryData[index],
    ...(itemName !== undefined && { itemName: itemName.trim() }),
    ...(quantity !== undefined && { quantity }),
    ...(location !== undefined && { location }),
    ...(category !== undefined && { category }),
    lastUpdated: getTodayDate(),
  };

  res.status(200).json({
    success: true,
    message: 'Item updated successfully.',
    data: inventoryData[index],
  });
};

// DELETE /inventory/:id - Delete an item
const deleteItem = (req, res) => {
  const id = Number(req.params.id);
  const index = inventoryData.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Item with id ${id} not found.`,
    });
  }

  const deleted = inventoryData.splice(index, 1)[0];

  res.status(200).json({
    success: true,
    message: 'Item deleted successfully.',
    data: deleted,
  });
};

module.exports = { getAllItems, addItem, updateItem, deleteItem };
