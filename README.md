# Animesh Maity | Professional Portfolio

<p align="center">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License"></a>
  <img src="https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react&logoColor=white" alt="Built with React">
  <img src="https://img.shields.io/badge/Styled%20with-TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Bundled%20with-Vite-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-181717?logo=github&logoColor=white" alt="GitHub Pages">
</p>

---

> **The Ani-Lytic Arc** — *Where Data Meets Design*



This repository hosts the personal portfolio website of Animesh Maity, an aspiring Data Analyst and visual storyteller transitioning from a non-technical background. He is passionate about exploring how data, design, and storytelling come together to create meaningful insights.

This portfolio is built using **React**, **Vite**, and **Tailwind CSS**.  
The site is fully responsive, modular, and features a **dynamic light/dark theme** for an optimized user experience.

---

## 🚀 Project Overview

This application showcases my **skills, projects, blogs**, and provides an easy way to get in touch.  
Key features include:

- **Single Page Application (SPA):** Fast, responsive, and smooth navigation.  
- **Dynamic Theming:** Light/Dark mode toggle implemented with React Context.  
- **Modular Architecture:** Strict separation of components, context, and data (see [Folder Structure](#-folder-structure)).  
- **Component-Specific Assets:** Imported for efficient caching and optimized build size.  
- **Brand Guidelines Section:**  
  The Ani-Lytic Arc represents both my **personal transformation journey** and the **data journey** — from raw (Bronze) to refined (Gold) insights that power meaningful decisions.  
  This section documents my professional branding elements and design rationale.

---

## 🛠️ Tech Stack

| Category | Tools |
|-----------|-------|
| **Framework** | React (Functional Components & Hooks) |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS (Utility-first for responsive design) |
| **Icons** | React Icons |

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (LTS recommended)  
- npm (comes with Node.js)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Animesh258/animesh258.github.io.git
cd animesh258.github.io

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

The application will typically be available at `http://localhost:5173`.

---

## 📂 Folder Structure

The project follows a modular pattern to ensure clean separation of concerns.

```
my-portfolio/
├── public/                  # Static files (Favicons, CV PDF, large videos)
├── src/
│   ├── components/
│   │   ├── common/          # Common components (Tooltip, PageTransition, ScrollToTop)
│   │   ├── sections/        # Full page sections (Hero, About, Projects, Contact)
│   │   └── ui/              # Reusable UI elements (Header, Card, Button, Toggle)
│   ├── context/             # ThemeContext (handles dark/light state)
│   ├── configs/             # Static Configurations (handles dark/light state)
│   ├── data/                # JSON files for Projects and Blogs (Data Source)
│   ├── media/               # Component-specific assets (e.g., project thumbnails)
│   ├── App.jsx              # Main router and layout
│   └── main.jsx
└── package.json
```

---

## 📝 Customization Guide

### 1. Update Data
Modify JSON files in `src/data/`:
- `projects.json`
- `blogs.json`

### 2. Manage Static Assets
- **Logo:** `public/assets/logo.svg`  
  _(Note: Logo and related brand visuals are © The Ani-Lytic Arc and not for reuse.)_
- **CV:** `public/Animesh_Maity_CV.pdf`
- **Favicons:**
  - `public/assets/brand-assets/favicons/favicons-light-theme/`
  - `public/assets/brand-assets/favicons/favicons-dark-theme/`

### 3. Adjust Theme Palette
Tailwind configuration is in `tailwind.config.js`.  
Update color tokens for your **primary** and **accent** brand colors.

---

## ⚖️ License & Branding Notice

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.  

> **Note:** All branding materials, including **The Ani-Lytic Arc** logo, name, and visual identity, are the intellectual property of **Animesh Maity**.  
> These are **not covered under the MIT license** and **may not be reused, modified, or redistributed** without explicit permission.

---

## 🌐 Live Site

👉 [Visit Portfolio Website](https://animesh258.github.io)

---

## 📫 Contact

Connect on [LinkedIn](https://www.linkedin.com/in/animesh-maity-5ab563376/) or explore more projects on [GitHub](https://github.com/animesh258).


---

<p align="center">
  <img src="https://img.shields.io/badge/Made%20with-❤️-008080?style=flat" alt="Made with love">
  <img src="https://img.shields.io/badge/By-Animesh%20Maity-40E0D0?style=flat" alt="Animesh Maity">
  <img src="https://img.shields.io/badge/Brand-The%20Anilytic%20Arc-008080?style=flat" alt="The Anilytic Arc">
  <br/>
  <sub>© 2025 The Anilytic Arc | Where Data Meets Design</sub>
</p>

---