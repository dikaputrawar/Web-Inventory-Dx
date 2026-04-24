# Data Inventory Office

A React frontend application for tracking and managing office equipment and supplies.

## Features

- **Dashboard Overview**: Summary cards showing total items, units, and categories
- **Data Table**: Interactive table with inventory items
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional interface with hover effects

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

### Building for Production

Create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── App.css          # Main application styles
├── App.js           # Main application component
├── index.css        # Global styles
└── index.js         # Application entry point
```

## Data Structure

The inventory data includes the following fields:
- `id`: Unique identifier
- `itemName`: Name of the item
- `quantity`: Number of units
- `location`: Storage location
- `category`: Item category
- `lastUpdated`: Last update date

## Functionality

- **Edit**: Placeholder for edit functionality (logs to console)
- **Delete**: Removes items from the table
- **Summary Statistics**: Automatically calculates totals

## Technologies Used

- React 18.2.0
- CSS3 with modern features
- Responsive design principles

## Future Enhancements

- Add item form
- Search and filter functionality
- Data persistence
- Edit modal
- Export functionality
