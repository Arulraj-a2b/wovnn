# Wovnn Real Estate Website - Components Guide

This guide provides information about the homepage components that have been created from your Figma design.

## 📁 Project Structure

```
src/
├── modules/
│   └── HomeModule/
│       ├── HomeScreen.tsx          # Main homepage component
│       └── components/
│           ├── index.ts            # Component exports
│           ├── HeaderSection.tsx   # Header with navigation and search
│           ├── FeaturedListings.tsx # Featured property cards (3)
│           ├── LocationsSection.tsx # Location cards (4)
│           ├── WelcomeSection.tsx  # Welcome text and image
│           ├── AgentsSection.tsx   # Agent cards (4)
│           ├── WhyChooseSection.tsx # Features and contact form
│           ├── JustListedSection.tsx # Property listings (6)
│           ├── PropertyTypesSection.tsx # Property type cards
│           └── Footer.tsx          # Footer with links and contact
```

## 🎨 Components Overview

### 1. **HeaderSection**

- Full-width header with hero image and search overlay
- Navigation menu with logo and links
- Advanced search dialog with filters
- Responsive search form

### 2. **FeaturedListings**

- Grid of 3 featured property cards
- Property details: image, title, address, price, beds, baths, sqft
- Status badges (Featured, Hot)
- Media count indicators
- Pagination controls
- "More Listing" button

### 3. **LocationsSection**

- 4 location cards in a grid
- Hover effects on images
- "View All Locations" button
- Shadow effects for depth

### 4. **WelcomeSection**

- Two-column layout (image + text)
- Company introduction text
- Descriptive content about services

### 5. **AgentsSection**

- 4 agent profile cards
- Circular profile images
- Agent details: name, role, company
- "View Profile" links

### 6. **WhyChooseSection**

- Dark background with overlay image
- 3 feature highlights (numbered)
- Contact form on the right side
- Form fields: name, email, phone, location, property type, budget
- GDPR checkbox
- Submit button

### 7. **JustListedSection**

- 2-column grid of 6 property listings
- Property cards with images and details
- Location-specific heading
- "View All Locations" link

### 8. **PropertyTypesSection**

- Grid layout with varied card sizes
- 6 property type categories
- Property count badges
- "More Properties" links with icons

### 9. **Footer**

- Partner logos section
- 3-column layout: contact info, featured communities, newsletter
- Social media icons (10 platforms)
- Newsletter signup form
- Legal disclaimer text
- Bottom bar with copyright and links

## 🖼️ Adding Images

To add actual images to your components, place your images in the `public/images/` directory and update the following references:

### Required Images:

#### FeaturedListings (3 images)

```
public/images/property1.jpg
public/images/property2.jpg
public/images/property3.jpg
```

#### LocationsSection (4 images)

```
public/images/location1.jpg
public/images/location2.jpg
public/images/location3.jpg
public/images/location4.jpg
```

#### WelcomeSection (1 image)

```
public/images/welcome-illustration.svg
```

#### AgentsSection (4 images)

```
public/images/agent1.jpg
public/images/agent2.jpg
public/images/agent3.jpg
public/images/agent4.jpg
```

#### JustListedSection (6 images)

```
public/images/property-list1.jpg
public/images/property-list2.jpg
public/images/property-list3.jpg
public/images/property-list4.jpg
public/images/property-list5.jpg
public/images/property-list6.jpg
```

#### PropertyTypesSection (6 images)

```
public/images/type-apartment.jpg
public/images/type-studio.jpg
public/images/type-single-family.jpg
public/images/type-villa.jpg
public/images/type-office.jpg
public/images/type-shop.jpg
```

#### Footer (5 images)

```
public/images/partner1.png
public/images/partner2.png
public/images/partner3.png
public/images/partner4.png
public/images/partner5.png
```

### Background Images:

- Header background: Add background image styling to HeaderSection component
- WhyChooseSection background: Add background image styling to WhyChooseSection component

## 🎨 Color Scheme

The design uses the following color palette:

- **Primary Blue**: `#22a9e0`
- **Dark**: `#141928`
- **Dark Light**: `#505564`
- **Gray**: `#646978`
- **Gray Mid**: `#787d8c`
- **Gray Light**: `#b4b9c8`
- **Off White**: `#f7f8f9`
- **Blue Light**: `#f0f5ff`
- **White**: `#ffffff`

## 🚀 Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Add Your Images**

   - Place all required images in `public/images/` directory
   - Follow the naming convention listed above

3. **Run Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🔧 Customization

### Updating Property Data

Each component accepts props that you can customize:

```typescript
// Example: FeaturedListings
const properties: PropertyCardProps[] = [
  {
    image: "/images/property1.jpg",
    title: "Your Property Title",
    address: "Your Address",
    price: "$XXX,XXX",
    beds: 3,
    baths: 2,
    sqft: 2500,
    type: "Single Family",
    featured: true,
    hot: true,
    photoCount: 6,
    videoCount: 1,
  },
  // Add more properties...
];
```

### Adding Background Images

To add a background image to HeaderSection:

```tsx
// In HeaderSection.tsx
<div
  className="absolute inset-0 h-[350px]"
  style={{
    backgroundImage: "url('/images/header-bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

## 📱 Responsive Design

The components are built with responsive design in mind using Tailwind CSS. The design is optimized for desktop view (1440px width) as per the Figma design. For mobile responsiveness, you may need to add additional Tailwind breakpoint classes.

## 🎯 Next Steps

1. Add real property data from your backend/API
2. Implement search functionality
3. Add routing for navigation links
4. Connect contact form to backend
5. Implement agent profile pages
6. Add property detail pages
7. Optimize images for web
8. Add loading states
9. Implement error handling
10. Add animations and transitions

## 📝 Notes

- All components are created as separate, reusable modules
- Each section is self-contained and can be reordered
- Components use TypeScript for type safety
- Tailwind CSS is used for styling (already configured)
- SVG icons are inline for better performance
- Image paths use the public folder convention

## 🐛 Troubleshooting

If images don't load:

1. Make sure images are in the correct `public/images/` directory
2. Check that image file names match exactly (case-sensitive)
3. Verify image file formats are supported (.jpg, .png, .svg)
4. Clear browser cache and restart dev server

## 📞 Support

For any issues or questions about the components, please refer to:

- React Documentation: https://react.dev
- Tailwind CSS Documentation: https://tailwindcss.com
- TypeScript Documentation: https://www.typescriptlang.org

---

Created based on Figma design with each section as a separate component for easy maintenance and customization.
