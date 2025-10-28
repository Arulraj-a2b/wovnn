# Search View Module

## Overview

The Search View Module provides a comprehensive property search interface with Google Maps integration. It displays all properties with their geo-locations prefilled on an interactive map.

## Features

### 1. **Interactive Google Maps Integration**

- Real-time property markers on Google Maps
- Custom styled markers with property information
- Click markers to view property details
- Auto-centering and bounds fitting for all properties

### 2. **Property List View**

- Detailed property cards with images
- Property information including:
  - Price
  - Address
  - Bedrooms, Bathrooms, Square footage
  - Property type
  - Days on market
  - Property status
- Click to select and highlight properties

### 3. **Multiple View Modes**

- **Split View**: Map and list side-by-side (default)
- **Map View**: Full-screen map with all property markers
- **List View**: Full-screen property list

### 4. **Synchronized Interactions**

- Click a property in the list to highlight it on the map
- Click a marker on the map to highlight the property in the list
- Selected properties are visually highlighted

### 5. **Navigation**

- Easy navigation back to home page
- Seamless integration with existing routing

## Components

### SearchViewScreen.tsx

Main screen component that orchestrates the search view experience.

**Features:**

- Fetches properties from the API
- Manages view mode state (split/map/list)
- Handles property selection
- Displays loading and error states

### MapView.tsx

Google Maps integration component that displays property markers.

**Features:**

- Loads Google Maps JavaScript API
- Places markers for each property with geo-coordinates
- Custom marker styling
- Click handling for markers
- Auto-fits bounds to show all properties
- Centers on selected property

**Props:**

- `properties`: Array of properties to display
- `onMarkerClick`: Callback when a marker is clicked
- `selectedProperty`: Currently selected property

### PropertyListView.tsx

Component that displays properties in a scrollable list.

**Features:**

- Displays property cards in a vertical list
- Shows property images, details, and actions
- Highlights selected properties
- Responsive design
- Handles missing images gracefully

**Props:**

- `properties`: Array of properties to display
- `onPropertyClick`: Callback when a property is clicked
- `selectedProperty`: Currently selected property

## Usage

### Accessing the Search View

Click the "More Listing" button on the Featured Listings section to navigate to the Search View.

### Navigating Back

Click the "Back to Home" button in the header to return to the home page.

### View Mode Toggle

Use the view mode buttons in the header to switch between:

- **Split**: See both map and list
- **Map**: Focus on the map
- **List**: Focus on the property list

### Interacting with Properties

1. **From the List**: Click any property card to highlight it and center the map on its location
2. **From the Map**: Click any marker to highlight the property and scroll to it in the list

## Google Maps Configuration

### API Key

The module uses the Google Maps JavaScript API with the following configuration:

- **API Key**: `AIzaSyBSL9kG1KcRO7c22kUonSMstqwQ6Cf2zlk`
- **Libraries**: `places`, `marker`
- **Version**: `weekly`

### Security

- URL signing secret is available for production use
- Current limit without signature: 25,000 requests per day

### Marker Customization

Markers use the Advanced Marker API with custom styling:

- Background color: `#22a9e0` (brand blue)
- Border color: `#141928` (dark)
- Glyph color: `#ffffff` (white)

## Data Flow

1. **Component Mount**: SearchViewScreen fetches properties via Redux middleware
2. **Data Loading**: Properties are stored in Redux state
3. **Map Rendering**: MapView receives properties and creates markers for each
4. **List Rendering**: PropertyListView displays property cards
5. **User Interaction**: Clicks update selectedProperty state
6. **Synchronization**: Both map and list respond to state changes

## Technical Details

### Dependencies

- `@googlemaps/js-api-loader`: For loading Google Maps API
- `react-router-dom`: For navigation
- `@reduxjs/toolkit`: For state management
- `react-redux`: For Redux integration

### State Management

- Properties data managed via Redux
- Local state for:
  - Selected property
  - View mode
  - Loading states

### Performance Optimizations

- Lazy loading of Google Maps API
- Efficient marker management with refs
- Proper cleanup on unmount
- Debounced map interactions

## Future Enhancements

### Potential Features

1. **Advanced Filters**

   - Price range slider
   - Property type filter
   - Bedroom/bathroom filters
   - Search by address/city

2. **Search Functionality**

   - Autocomplete address search
   - Draw search areas on map
   - Saved searches

3. **Property Details Modal**

   - Full property information
   - Image gallery
   - Contact form
   - Share functionality

4. **Map Clustering**

   - Cluster markers for better performance
   - Dynamic clustering based on zoom level

5. **Favorites**
   - Save favorite properties
   - Compare properties

## Troubleshooting

### Map Not Loading

- Check internet connection
- Verify API key is valid
- Check browser console for errors
- Ensure Google Maps API is enabled in Google Cloud Console

### Properties Not Appearing

- Check Redux state for data
- Verify API endpoint is working
- Check for geo-coordinate data in properties
- Review browser console for errors

### Markers Not Clickable

- Ensure `onMarkerClick` callback is provided
- Check z-index issues with map controls
- Verify marker library is loaded

## License

This module is part of the WOVNN application.
