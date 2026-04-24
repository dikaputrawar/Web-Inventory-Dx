import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card.tsx';
import { Button } from './components/ui/button.jsx';
import { Badge } from './components/ui/badge.jsx';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table.tsx';

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
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Data Inventory Office
        </h1>
        <p className="text-gray-500 mt-1">
          Track and manage office equipment and supplies
        </p>
      </div>

      {/* Summary */}
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { label: "Total Items", value: totalItems },
          { label: "Total Units", value: totalUnits },
          { label: "Categories", value: categories }
        ].map((item, i) => (
          <Card key={i} className="rounded-xl border bg-white shadow-sm">
            <CardContent className="p-5">
              <p className="text-sm text-gray-500">{item.label}</p>
              <h2 className="text-2xl font-semibold mt-2 text-gray-800">
                {item.value}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Table */}
      <Card className="rounded-xl border bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-700">
            Inventory Items
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-hidden rounded-b-xl">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead>Item Name</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {inventoryData.map((item) => (
                  <TableRow
                    key={item.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <TableCell className="font-medium text-gray-800">
                      {item.itemName}
                    </TableCell>

                    <TableCell>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {item.quantity}
                      </span>
                    </TableCell>

                    <TableCell className="text-gray-600">
                      {item.location}
                    </TableCell>

                    <TableCell>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                        {item.category}
                      </span>
                    </TableCell>

                    <TableCell className="text-gray-500">
                      {item.lastUpdated}
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="flex justify-end gap-3 text-sm">
                        <button className="text-blue-600 hover:underline transition-colors">
                          Edit
                        </button>
                        <button className="text-red-500 hover:underline transition-colors">
                          Delete
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

    </div>
  </div>
);
}

export default App;
