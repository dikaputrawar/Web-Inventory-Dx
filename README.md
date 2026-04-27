# Data Inventory Office

A full-stack inventory management system for tracking and managing office equipment and supplies. Built with React (frontend) and Node.js + Express (backend API).

## Features

- **Dashboard Overview**: Summary cards showing total items, units, and categories
- **Data Table**: Interactive table displaying all inventory items
- **Full CRUD Operations**: Create, Read, Update, and Delete items via REST API
- **Edit Modal**: In-app form to edit item details
- **Delete Confirmation**: Confirmation dialog before deleting items
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional interface with hover effects and badges

## Tech Stack

| Layer    | Technology              |
|----------|-------------------------|
| Frontend | React, Tailwind CSS     |
| Backend  | Node.js, Express.js     |
| Data     | In-memory array (no DB) |
| Other    | CORS, JSON middleware   |

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone or download this project

2. Install **frontend** dependencies:

```bash
npm install
```

3. Install **backend** dependencies:

```bash
cd backend
npm install
```

### Running the Application

**1. Start the backend server** (port 5000):

```bash
cd backend
node server.js
```

**2. Start the frontend dev server** (in a separate terminal):

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (Vite default) and the API at `http://localhost:5000`.

## Project Structure

```
├── src/                          # Frontend (React)
│   ├── App.jsx                   # Main application component
│   ├── components/ui/            # Reusable UI components
│   └── ...
│
├── backend/                      # Backend (Express API)
│   ├── server.js                 # Express server entry point
│   ├── routes/
│   │   └── inventory.js          # Route definitions
│   ├── controllers/
│   │   └── inventoryController.js # CRUD logic
│   └── data/
│       └── inventoryData.js      # In-memory data store
│
├── package.json                  # Frontend dependencies
└── README.md
```

## API Endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/`               | API info & endpoint list |
| GET    | `/inventory`      | Get all inventory items  |
| POST   | `/inventory`      | Add a new item           |
| PUT    | `/inventory/:id`  | Update an existing item  |
| DELETE | `/inventory/:id`  | Delete an item           |

### Example Request — Add Item

```bash
curl -X POST http://localhost:5000/inventory \
  -H "Content-Type: application/json" \
  -d '{"itemName": "Monitor 27 inch", "quantity": 10, "location": "Gudang A", "category": "Electronics"}'
```

### Example Response

```json
{
  "success": true,
  "message": "Item added successfully.",
  "data": {
    "id": 1745737200000,
    "itemName": "Monitor 27 inch",
    "quantity": 10,
    "location": "Gudang A",
    "category": "Electronics",
    "lastUpdated": "2026-04-27"
  }
}
```

## Data Structure

Each inventory item follows this schema:

| Field         | Type   | Description                    |
|---------------|--------|--------------------------------|
| `id`          | number | Auto-generated (`Date.now()`)  |
| `itemName`    | string | Name of the item (**required**)|
| `quantity`    | number | Number of units                |
| `location`    | string | Storage location               |
| `category`    | string | Item category                  |
| `lastUpdated` | string | Date in `YYYY-MM-DD` format    |

## Technologies Used

- **Frontend**: React 18, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js 4
- **Middleware**: CORS, express.json()
- **UI Components**: Custom Card, Table, Button, Badge

## Future Enhancements

- [ ] Connect to MySQL database
- [ ] Add item form (POST from frontend)
- [ ] Search and filter functionality
- [ ] User authentication
- [ ] Export to CSV/Excel
- [ ] Pagination for large datasets
