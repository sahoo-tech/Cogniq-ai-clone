# Cogniq AI - UI/UX Clone Project

This project is a high-fidelity, pixel-perfect frontend clone of a modern AI agency landing page design (Cogniq AI). It was developed to match a specific set of UI/UX design templates, ensuring strict adherence to proportions, typography, color palettes, and spacing.

## ✨ Features

- **Pixel-Perfect Implementation:** Components are carefully crafted to match the exact dimensions, padding, and layout of the original design templates.
- **Modern UI Elements:** Features glassmorphism, precise linear gradients, modern pill tags, and custom SVG icons.
- **Smooth Animations:** Includes a custom `IntersectionObserver` hook (`useScrollReveal`) for staggered, fade-up scroll animations, as well as a seamless page-load fade-in sequence.
- **Responsive Architecture:** Built using CSS Grid and Flexbox to ensure layouts scale correctly while maintaining design integrity.
- **Component-Driven:** Modular React architecture separating distinct sections like Navbar, Hero, Services, Why Choose Us, Process, and Footer into maintainable files.

## 🛠️ Technology Stack

- **Framework:** React 18+ (via Vite)
- **Styling:** CSS3, Tailwind CSS (for base utilities), and custom inline styling for absolute precision on gradients and dynamic layouts.
- **Typography:** Google Fonts (Inter)
- **Icons & Assets:** Custom SVG implementations and high-quality placeholder imagery (Unsplash).

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal:
   ```bash
   cd UI-UX-Design
   ```
3. Install the project dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the local Vite development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the project.

## 📁 Project Structure

```text
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx       # Top navigation with gradient buttons
│   ├── Hero.jsx         # Main landing section with background grid
│   ├── About.jsx        # About Us section with feature highlights
│   ├── Services.jsx     # CSS Grid cards for service offerings
│   ├── WhyChooseUs.jsx  # Feature breakdown with custom icons
│   ├── Process.jsx      # Numbered step-by-step workflow cards
│   ├── CTABanner.jsx    # Call to action section
│   └── Footer.jsx       # Multi-column footer with social links
├── hooks/
│   └── useScrollReveal.js # Custom hook for scroll-based animations
├── App.jsx              # Main application entry point & layout assembler
├── index.css            # Global styles, font imports, and animation keyframes
└── main.jsx             # React DOM rendering
```

---
*Developed as a UI/UX faithful clone project.*
