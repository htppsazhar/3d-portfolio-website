# 🌐 3D Portfolio Website

An interactive **3D portfolio website** built with **React, Three.js, and Vite**, designed to showcase projects in a visually engaging and modern way.

The project combines **real-time 3D rendering**, smooth UI interactions, and a fully functional **contact system powered by EmailJS**, all optimized for both **desktop and mobile devices**. It reflects my focus on clean architecture, performance, and user-centric front-end development.

🚀 **Live Demo:** https://azhar-khan-me.vercel.app/

---

## ✨ Features

- 🌍 Interactive 3D landing page built with Three.js  
- 📱 Fully responsive (desktop & mobile optimized)  
- 🧭 Smooth navigation using React Router  
- 📬 Working contact form powered by EmailJS  
- 🦊 Animated 3D character interaction on the Contact page  
- ⚡ Fast deployment using Vercel  

---

## 🛠 Tech Stack

- **Frontend:** React (Vite)  
- **3D Rendering:** Three.js, @react-three/fiber, @react-three/drei  
- **Routing:** React Router DOM  
- **Email Service:** EmailJS  
- **Styling:** Tailwind CSS  
- **Deployment:** Vercel  

---

## 📁 Project Structure

```bash
3D-Portfolio/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   ├── favicon.ico
│   │   ├── react.svg
│   │   └── sakura.mp3
│   │
│   ├── Components/
│   │   ├── Alert.jsx
│   │   ├── CTA.jsx
│   │   ├── HomeInfo.jsx
│   │   ├── Loader.jsx
│   │   └── Navbar.jsx
│   │
│   ├── constants/
│   │   └── index.js
│   │
│   ├── hooks/
│   │   └── useAlert.js
│   │
│   ├── models/
│   │   ├── Bird.jsx
│   │   ├── Fox.jsx
│   │   ├── Island.jsx
│   │   ├── Plane.jsx
│   │   └── Sky.jsx
│   │
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── index.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.local
├── index.html
├── package.json
├── vite.config.js
├── .eslintrc.cjs
├── .gitignore
└── README.md
