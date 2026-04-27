import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card.jsx';
import { Button } from './components/ui/button.jsx';
import { Badge } from './components/ui/badge.jsx';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table.jsx';

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

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editForm, setEditForm] = useState({
    itemName: '',
    quantity: '',
    location: '',
    category: '',
    lastUpdated: ''
  });

  const getToday = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setEditForm({
      itemName: item.itemName,
      quantity: item.quantity,
      location: item.location,
      category: item.category,
      lastUpdated: item.lastUpdated
    });
    setEditModal(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setInventoryData(inventoryData.map(item =>
      item.id === selectedItem.id
        ? { ...item, ...editForm, quantity: Number(editForm.quantity), lastUpdated: getToday() }
        : item
    ));
    setEditModal(false);
    setSelectedItem(null);
  };

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    setInventoryData(inventoryData.filter(item => item.id !== selectedItem.id));
    setDeleteModal(false);
    setSelectedItem(null);
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
                        <button
                          className="text-blue-600 hover:underline transition-colors cursor-pointer"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-500 hover:underline transition-colors cursor-pointer"
                          onClick={() => handleDeleteClick(item)}
                        >
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

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 space-y-5">
            <h2 className="text-lg font-semibold text-gray-800">Edit Item</h2>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Item Name</label>
                <input
                  type="text"
                  value={editForm.itemName}
                  onChange={(e) => setEditForm({ ...editForm, itemName: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Quantity</label>
                <input
                  type="number"
                  value={editForm.quantity}
                  onChange={(e) => setEditForm({ ...editForm, quantity: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Location</label>
                <input
                  type="text"
                  value={editForm.location}
                  onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Category</label>
                <input
                  type="text"
                  value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => { setEditModal(false); setSelectedItem(null); }}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Delete Item</h2>
            <p className="text-sm text-gray-600">
              Are you sure you want to delete <span className="font-semibold">{selectedItem?.itemName}</span>? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => { setDeleteModal(false); setSelectedItem(null); }}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleDeleteConfirm}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  </div>
);
}

export default App;
