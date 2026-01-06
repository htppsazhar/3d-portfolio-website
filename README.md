# 🌍 3D Portfolio Website

A modern, interactive **3D portfolio website** built using **React, Three.js, and EmailJS**, designed to showcase my projects, skills, and experience in a visually engaging way.

🔗 **Live Website:**  
https://azhar-khan-me.vercel.app/

---

## ✨ Features

- 🌐 **Interactive 3D Landing Page** using Three.js
- 📱 **Fully Responsive** (Desktop & Mobile optimized)
- 🧭 Smooth navigation with React Router
- 📩 **Working Contact Form** powered by EmailJS
- 🦊 Animated 3D character interaction on Contact page
- ⚡ Fast deployment using Vercel

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **3D Rendering:** Three.js, @react-three/fiber, @react-three/drei
- **Routing:** React Router DOM
- **Email Service:** EmailJS
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## 📁 Project Structure

3D-Portfolio/
├── src/
│   ├── assets/
│   │   ├── icons/          # SVG & UI icons
│   │   ├── images/         # Images used in the site
│   │   ├── favicon.ico
│   │   ├── react.svg
│   │   └── sakura.mp3
│   │
│   ├── Components/         # Reusable UI components
│   │   ├── Alert.jsx
│   │   ├── CTA.jsx
│   │   ├── HomeInfo.jsx
│   │   ├── Loader.jsx
│   │   └── Navbar.jsx
│   │
│   ├── constants/
│   │   └── index.js        # Static data & constants
│   │
│   ├── hooks/
│   │   └── useAlert.js     # Custom alert hook
│   │
│   ├── models/             # 3D models (React Three Fiber)
│   │   ├── Bird.jsx
│   │   ├── Fox.jsx
│   │   ├── Island.jsx
│   │   ├── Plane.jsx
│   │   └── Sky.jsx
│   │
│   ├── Pages/              # Application pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── index.js
│   │
│   ├── App.jsx             # App entry with routing
│   ├── main.jsx            # React DOM entry
│   └── index.css           # Global styles
│
├── .env.local               # Environment variables (EmailJS)
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
