# Image Paths Reference

This file documents all image paths used in the landing page and where they should be located.

## Logo Images

### Navbar Logo
- **Path in code**: `/assets/logos/gridtrack-logo.png`
- **File location**: `public/assets/logos/gridtrack-logo.png`
- **Dimensions**: h-10 (40px height), width auto
- **Component**: `src/components/Navigation.tsx`

### Footer Logo
- **Path in code**: `/assets/logos/gridtrack-logo.png`
- **File location**: `public/assets/logos/gridtrack-logo.png`
- **Dimensions**: h-8 (32px height), width auto
- **Filters**: `brightness-0 invert` (to make it white on dark background)
- **Component**: `src/components/Footer.tsx`

### Favicon
- **Path in code**: `/assets/logos/gridtrack-icon.png`
- **File location**: `public/assets/logos/gridtrack-icon.png`
- **Usage**: Browser tab icon
- **File**: `index.html`

---

## Screenshot Images

### Timeline Screenshot
- **Path in code**: `/assets/screenshots/timeline.png`
- **File location**: `public/assets/screenshots/timeline.png`
- **Used in**: Hero section, Features section (Feature 1)
- **Status**: ⚠️ Placeholder SVG (replace with actual screenshot)

### Dashboard Screenshot  
- **Path in code**: `/assets/screenshots/dashboard.png`
- **File location**: `public/assets/screenshots/dashboard.png`
- **Used in**: Features section (Feature 2)
- **Status**: ⚠️ Placeholder SVG (replace with actual screenshot)

### Portfolios Screenshot
- **Path in code**: `/assets/screenshots/portfolios.png`
- **File location**: `public/assets/screenshots/portfolios.png`
- **Used in**: Features section (Feature 3)
- **Status**: ⚠️ Placeholder SVG (replace with actual screenshot)

---

## Background Assets

### Cloud Background
- **Path in code**: `/clouds.svg`
- **File location**: `public/clouds.svg`
- **Used in**: Hero section background
- **Status**: ✅ Created

---

## Important Notes

1. **All paths start with `/`** - This tells Vite to serve them from the `public` folder
2. **Case-sensitive** - Make sure filenames match exactly (e.g., `gridtrack-logo.png` not `GridTrack-Logo.png`)
3. **File formats**: 
   - Logos: PNG recommended (supports transparency)
   - Screenshots: PNG or JPG
   - Icon: PNG recommended
4. **Hot reload**: The dev server automatically reloads when you add/change files in `public/`

---

## Current Folder Structure

```
public/
├── clouds.svg ✅
├── vite.svg 
└── assets/
    ├── logos/  (📁 folder exists but empty - ADD YOUR LOGOS HERE!)
    │   ├── gridtrack-logo.png ❌ MISSING
    │   └── gridtrack-icon.png ❌ MISSING
    └── screenshots/
        ├── timeline.png ⚠️ PLACEHOLDER
        ├── dashboard.png ⚠️ PLACEHOLDER
        └── portfolios.png ⚠️ PLACEHOLDER
```
