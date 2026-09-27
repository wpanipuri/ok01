# VeloCraft — Find Your Ride 🚴

A responsive website showcasing 10 different types of bicycles with interactive filtering, sorting, card expansion detail views, side-by-side comparison, and a "Find My Fit" interactive recommendation quiz.

---

## 🌟 Key Features

1. **Hero Section**
   - Bold headline: **"Find Your Ride"** with glowing gradient accents.
   - Concise subheading and quick statistical indicators (10 Bike Categories, 4 Terrain Classes, 100% Side-by-Side Compare).
   - Fast action buttons to jump straight to the gallery or launch the interactive Bike Matcher Quiz.

2. **10 Bicycle Categories**
   - **Road Bike** (Speed & Sport)
   - **Mountain Bike / MTB** (Off-Road & Trail)
   - **Hybrid Bike** (City & Commute)
   - **Electric Bike / e-bike** (Electric Assist)
   - **BMX Bike** (Speed, Stunts & Sport)
   - **Gravel Bike** (Off-Road & Adventure)
   - **Cruiser Bike** (City & Boardwalk)
   - **Folding Bike** (City & Transit Space-Saver)
   - **Touring Bike** (Long-Distance Expeditions)
   - **Fat Bike** (Snow, Sand & Monster Flotation)

3. **Interactive Card Expansion (Detail Modal View)**
   - Clicking any card opens a modal view containing:
     - **Key Features**: Engineered components, materials, and drivetrain specifics.
     - **Ideal Terrain / Use Case**: Visual terrain suitability badges (Pavement, Trails, Gravel, City, Snow/Sand).
     - **Average Price Range**: Market breakdown across Entry, Mid-Range, and Pro Tiers.
     - **Pros & Cons**: Side-by-side comparison boxes with advantages and cautionary notes.
     - **Action Triggers**: Add/remove directly from comparison matrix.

4. **Category Filtering, Live Search & Sorting**
   - Filter pills: **All Bikes**, **Off-Road**, **City & Commute**, **Speed & Sport**, **Electric**.
   - Instant live search input with keyword matching across names, descriptions, tags, and terrains.
   - Sort dropdown: **Price: Low to High**, **Price: High to Low**, **Name: A to Z**, **Name: Z to A**.

5. **Side-by-Side Comparison Tool**
   - Select up to 3 bikes simultaneously to view a comparison matrix comparing weight, price, speed, terrain, and pros/cons head-to-head.

6. **"Find My Fit" Recommendation Quiz**
   - 3-step interactive questionnaire that guides riders to their ideal bike based on surface, riding style, and electric preference.

7. **Clean Modern Design & Responsive Grid**
   - **Desktop (≥ 1024px)**: 3-column grid.
   - **Tablet (641px - 1023px)**: 2-column grid.
   - **Mobile (≤ 640px)**: 1-column grid with touch-friendly drawer navigation.
   - **Color Palette**: Sophisticated charcoal/dark slate neutral base with high-energy Electric Emerald/Cyan accent, and an integrated Dark/Light mode switcher.
   - **Hover Effects**: Smooth scale (`translateY(-8px) scale(1.015)`), elevation shadow glow, and image zoom.

8. **Sticky Navbar & Footer**
   - Sticky navbar with blur backdrop, bike brand icon, navigation links with active states, comparison counter badge, and CTA button.
   - Semantic footer with category shortcuts, contact form, and SVG social links.

---

## 🚀 How to Run

Simply open `index.html` in any modern web browser:

- **Windows**: Double-click `index.html` or run:
  ```powershell
  Start-Process "index.html"
  ```
- **macOS**:
  ```bash
  open index.html
  ```
- **Linux**:
  ```bash
  xdg-open index.html
  ```

No build step, Node.js, or external package installation is required.

---

## 📁 File Structure

```
c:/Users/Nishant/Downloads/s/
├── index.html        # Semantic HTML5 markup, accessible dialogs & structure
├── styles.css        # Modern CSS Grid/Flexbox, CSS variables, dark/light themes
├── app.js            # Bike dataset, filtering, search, modal views & quiz engine
└── README.md         # Documentation & guide
```
