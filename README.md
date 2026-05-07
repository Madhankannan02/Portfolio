# Madhan.Design - Personal Portfolio

A high-performance, aesthetically pleasing portfolio website designed to showcase premium UI/UX work. Built with **React** and **Framer Motion**, this project emphasizes smooth transitions, unified animation timing, and a "luxury minimalist" design philosophy.

![Portfolio Preview](src/assets/images/Portfolio-Screenshot-Updated-Look)

## 🚀 Key Features

*   **Cinematic Preloader**: A custom "Wireframe Construction" startup sequence that visualizes the design process (Grid -> Layout -> Assets -> Polish).
*   **Unified Motion System**: impeccable consistency with standardized `0.6s` ease-out entrance animations for every element across the site.
*   **Deep Dive Case Studies**: Dedicated routes for major projects (`/stract`, `/hathaven`, `/butcher-box`, `/titan-storage`) featuring parallax effects and staggered grid layouts.
*   **Performance Optimized**:
    *   Lazy-loaded routes via `React.Suspense`.
    *   Optimized font loading (`@fontsource`).
    *   Zero-layout-shift font rendering.

## 🛠 Tech Stack

*   **Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Routing**: [React Router DOM](https://reactrouter.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```bash
src/
├── assets/         # Optimized images and SVGs
├── components/
│   ├── pages/      # Individual Project Case Studies (HatHaven, Stract, etc.)
│   ├── Contact.jsx # Contact section with hover effects
│   ├── Hero.jsx    # Main landing hero with animated text
│   ├── Navbar.jsx  # Responsive navigation
│   ├── Preloader.jsx # Custom wireframe animation component
│   └── ...
├── data/           # Project data objects
└── App.jsx         # Main routing and global layout
```

## 🏃‍♂️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Madhankannan02/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🎨 Design System

The project follows a strict design token system for consistency:

*   **Typography**:
    *   *Headings*: **Inter** (Bold/Black weights) & **Poppins**.
    *   *Body*: **Manrope** & **Inter** (Regular/Light).
*   **Colors**:
    *   Dominant: `#0A0A0A` (Titan Black), `#FFFFFF` (White).
    *   Accents: `#FF7420` (Orange), `#66588D` (Royal Purple).
*   **Animation Timing**:
    *   *Entrance*: Duration **0.6s**, Delay staggers of **0.1s**, Vertical offset **20px**.

## 👤 Author

**Madhan Kannan**  
*UI/UX Designer & Frontend Developer*

*   [LinkedIn](https://www.linkedin.com/in/madhankannan/)
*   [Behance](https://www.behance.net/madhankannan)
*   [Email](mailto:madhankannan29@gmail.com)

---
© 2026 Madhan Kannan. All rights reserved.
