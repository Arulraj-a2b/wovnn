# Icons

This folder contains all reusable SVG icon components for the application.

## Available Icons

| Icon | Component         | Usage                                     |
| ---- | ----------------- | ----------------------------------------- |
| 🔽   | `SvgChevronDown`  | Dropdown indicators, collapsible sections |
| ➡️   | `SvgChevronRight` | Navigation arrows, next buttons           |
| ⬅️   | `SvgChevronLeft`  | Previous buttons, back navigation         |
| 📍   | `SvgMapPin`       | Location markers, address fields          |
| 🏠   | `SvgHome`         | Property type selector, home navigation   |
| 🎚️   | `SvgSliders`      | Filter controls, settings                 |
| 💵   | `SvgDollarSign`   | Budget fields, pricing                    |
| 🎨   | `SvgPalette`      | Advanced search, customization            |
| 🖼️   | `SvgImage`        | Image upload, lifestyle search            |
| 👤   | `SvgUser`         | User profile, account menu                |
| 📷   | `SvgCamera`       | Photo count, media gallery                |
| 🎥   | `SvgVideo`        | Video count, media player                 |
| ❤️   | `SvgHeart`        | Wishlist, favorites, likes                |
| 🛏️   | `SvgBed`          | Bedroom count, property amenities         |
| 🚿   | `SvgBath`         | Bathroom count, property amenities        |
| 📐   | `SvgArea`         | Square footage, property size             |
| 📌   | `SvgLocationPin`  | Quick actions, search by area             |
| 📞   | `SvgPhone`        | Contact actions, call to action           |
| ⬇️   | `SvgArrowDown`    | "More" links, property type cards         |
| ⭐   | `SvgStar`         | Rating display, testimonials              |

## Usage

### Basic Usage

```tsx
import { SvgMapPin, SvgHome, SvgUser } from "@/assets/icons";

function MyComponent() {
  return (
    <div>
      <SvgMapPin className="w-5 h-5 text-gray-600" />
      <SvgHome className="w-6 h-6 text-blue-500" />
      <SvgUser />
    </div>
  );
}
```

### Custom Styling

All icons accept a `className` prop for custom styling:

```tsx
import { SvgChevronDown } from "@/assets/icons";

// Custom size and color
<SvgChevronDown className="w-8 h-8 text-red-500" />

// Rotate icon
<SvgChevronDown className="w-6 h-6 transform rotate-180" />

// Hover effects
<SvgChevronDown className="w-5 h-5 hover:text-blue-500 transition-colors" />
```

## Icon Props

Each icon component accepts the following props:

```typescript
interface IconProps {
  className?: string; // Tailwind CSS classes for styling
}
```

## Adding New Icons

To add a new icon:

1. Create a new `.tsx` file in this directory
2. Follow the existing pattern:

```tsx
import React from "react";

interface IconProps {
  className?: string;
}

export const SvgYourIconName: React.FC<IconProps> = ({
  className = "w-5 h-5",
}) => {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      {/* Your SVG path here */}
    </svg>
  );
};
```

3. Export it in `index.ts`:

```tsx
export { SvgYourIconName } from "./SvgYourIconName";
```

## Icon Guidelines

### Sizing

- **Small**: `w-4 h-4` (16px) - For inline text icons
- **Medium**: `w-5 h-5` (20px) - Default for form fields
- **Large**: `w-6 h-6` (24px) - For navigation and buttons
- **Extra Large**: `w-8 h-8` (32px) - For prominent features

### Colors

- Use `currentColor` in SVG paths to inherit text color
- Apply colors via `text-{color}` classes
- Examples: `text-gray-600`, `text-blue-500`, `text-white`

### Accessibility

Always provide appropriate `aria-label` when icons are used without text:

```tsx
<button aria-label="Close menu">
  <SvgChevronDown className="w-6 h-6" />
</button>
```

## Used In

- **HeaderSection**: Navigation, search filters
  - `SvgChevronDown`, `SvgMapPin`, `SvgHome`, `SvgSliders`, `SvgDollarSign`, `SvgPalette`, `SvgImage`, `SvgUser`
- **PropertyCard & FeaturedListings**: Property cards, pagination, amenities
  - `SvgCamera`, `SvgVideo`, `SvgHeart`, `SvgMapPin`, `SvgBed`, `SvgBath`, `SvgArea`, `SvgChevronLeft`, `SvgChevronRight`
- **QuickActionsSection**: Quick action cards
  - `SvgHome`, `SvgLocationPin`, `SvgPhone`
- **ListingCard & JustListedSection**: Property listings
  - `SvgMapPin`, `SvgBed`, `SvgBath`, `SvgArea`
- **PropertyTypeCard & PropertyTypesSection**: Property type cards
  - `SvgArrowDown`
- **TestimonialCard & TestimonialsSection**: Client testimonials
  - `SvgStar`

## Design System

These icons follow the design system from the Figma file:

- **Style**: Outline and filled variants
- **Stroke Width**: 2px for outline icons
- **ViewBox**: 0 0 24 24
- **Color Palette**: Matches app color scheme

## Benefits

✅ **Reusable** - Import once, use anywhere  
✅ **Type-safe** - Full TypeScript support  
✅ **Customizable** - Easy styling with Tailwind  
✅ **Consistent** - Unified design language  
✅ **Performant** - SVG components, no external dependencies  
✅ **Maintainable** - Single source of truth
