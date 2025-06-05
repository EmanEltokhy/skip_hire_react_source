# Skip Hire Selection Page

A premium React application for selecting skip sizes with a responsive grid layout and dark mode UI.


## Overview

This application provides a modern, user-friendly interface for customers to select skip sizes for waste management services. It features a responsive grid layout displaying various skip sizes with their respective details, pricing, and availability.

## Features

- **Premium Dark Mode UI**: Sleek, modern interface with gradient accents and subtle animations
- **Responsive Grid Layout**: Displays skip options in a multi-row grid that adapts to all screen sizes
- **Dynamic API Integration**: Connects to backend services to fetch skip data
- **Interactive Selection**: Visual feedback when users select a skip option
- **Warning Indicators**: Clear badges for skips with road restrictions
- **High-Quality Skip Visualizations**: 3D rendered skip images for all available sizes

## Tech Stack

- React 18
- CSS3 with custom properties
- RESTful API integration
- Responsive design principles

## Project Structure

```
src/
├── components/
│   ├── SkipCard.js         # Individual skip option card component
│   ├── SkipCard.css        # Styling for skip cards
│   ├── SkipCarousel.js     # Grouped skip cards
|   └── SkipCarousel.js     # Styling for Grouped skip cards
├── services/
│   └── SkipService.js      # API service for fetching skip data
├── App.js                  # Main application component with grid layout
├── App.css                 # Global styles and theme variables
└── index.js                # Application entry point
```

## API Integration

The application integrates with a RESTful API that provides skip data in the following format:

```json
[
  {
    "id": 17933,
    "size": 4,
    "hire_period_days": 14,
    "transport_cost": null,
    "per_tonne_cost": null,
    "price_before_vat": 278,
    "vat": 20,
    "postcode": "NR32",
    "area": "",
    "forbidden": false,
    "created_at": "2025-04-03T13:51:46.897146",
    "updated_at": "2025-04-07T13:16:52.813",
    "allowed_on_road": true,
    "allows_heavy_waste": true
  },
  // Additional skip options...
]
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/EmanEltokhy/skip_hire_react_source.git
   cd skip-hire-selection
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

To build the application for production:

```
npm run build
```

This creates an optimized production build in the `build` folder that can be deployed to any static hosting service.
