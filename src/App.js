import React, { useState } from 'react';
import './App.css';

function App() {
  const [inventoryData, setInventoryData] = useState([
    {
      id: 1,
      itemName: 'Laptop - Dell XPS 13',
      quantity: 5,
      location: 'Storage Room A',
      category: 'Electronics',
      lastUpdated: '2025-04-15'
    },
    {
      id: 2,
      itemName: 'Office Chairs',
      quantity: 12,
      location: 'Warehouse B',
      category: 'Furniture',
      lastUpdated: '2025-04-18'
    },
    {
      id: 3,
      itemName: 'Printer Paper (Reams)',
      quantity: 45,
      location: 'Supply Closet',
      category: 'Supplies',
      lastUpdated: '2025-04-20'
    },
    {
      id: 4,
      itemName: 'USB-C Cables',
      quantity: 28,
      location: 'Tech Storage',
      category: 'Accessories',
      lastUpdated: '2025-04-19'
    },
    {
      id: 5,
      itemName: 'Desk Lamps',
      quantity: 8,
      location: 'Warehouse B',
      category: 'Electronics',
      lastUpdated: '2025-04-17'
    },
    {
      id: 6,
      itemName: 'Notebooks (Boxes)',
      quantity: 20,
      location: 'Supply Closet',
      category: 'Supplies',
      lastUpdated: '2025-04-21'
    }
  ]);

  const handleEdit = (id) => {
    console.log('Edit item with ID:', id);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log('Delete item with ID:', id);
    // Implement delete functionality
    setInventoryData(inventoryData.filter(item => item.id !== id));
  };

  const totalItems = inventoryData.length;
  const totalUnits = inventoryData.reduce((sum, item) => sum + item.quantity, 0);
  const categories = [...new Set(inventoryData.map(item => item.category))].length;

  return (
    <div className="container">
      <header className="header">
        <h1>Data Inventory Office</h1>
        <p>Track and manage office equipment and supplies</p>
      </header>

      <div className="summary-cards">
        <div className="summary-card">
          <h3>{totalItems}</h3>
          <p>Total Items</p>
        </div>
        <div className="summary-card">
          <h3>{totalUnits}</h3>
          <p>Total Units</p>
        </div>
        <div className="summary-card">
          <h3>{categories}</h3>
          <p>Categories</p>
        </div>
      </div>

      <div className="table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Category</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr key={item.id}>
                <td>{item.itemName}</td>
                <td>
                  <span className="quantity-badge">{item.quantity}</span>
                </td>
                <td>{item.location}</td>
                <td>
                  <span className="category-badge">{item.category}</span>
                </td>
                <td>{item.lastUpdated}</td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="btn btn-edit" 
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn btn-delete" 
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
