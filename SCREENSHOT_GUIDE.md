# Screenshot Replacement Guide

## Quick Instructions

Your landing page is complete and ready! However, you need to replace the placeholder screenshots with your actual application screenshots.

## Steps:

1. **Locate your screenshots** - You shared 3 screenshots in the chat:
   - Image 1: Timeline/Gantt chart view
   - Image 2: Dashboard with project cards
   - Image 3: Portfolios page

2. **Save them to the correct location:**

   ```
   public/assets/screenshots/timeline.png    (Image 1 - Timeline)
   public/assets/screenshots/dashboard.png   (Image 2 - Dashboard)
   public/assets/screenshots/portfolios.png  (Image 3 - Portfolios)
   ```

3. **Restart the dev server** (if it's running):
   - Press Ctrl+C in the terminal
   - Run `npm run dev`
   - Open http://localhost:5173

The screenshots will automatically appear in the browser mockup frames!

## Alternative: Use PowerShell to Copy

If you have your screenshots saved somewhere, you can copy them quickly:

```powershell
# Example: if your screenshots are on Desktop
Copy-Item "C:\path\to\your\timeline.png" "public\assets\screenshots\timeline.png"
Copy-Item "C:\path\to\your\dashboard.png" "public\assets\screenshots\dashboard.png"
Copy-Item "C:\path\to\your\portfolios.png" "public\assets\screenshots\portfolios.png"
```

---

**That's it!** Your landing page will look stunning with the real screenshots.
