🌱 EcoBazaarX

EcoBazaarX is a modern eco-friendly shopping web application designed to promote sustainable purchasing by visualizing environmental impact, managing user shopping behavior, and providing a smooth, secure e-commerce experience.

The platform focuses on carbon-footprint awareness, user personalization, and intuitive dashboards to help users make environmentally responsible shopping decisions.

✨ Features

🔐 Secure Authentication

User signup and login

Protected routes for authenticated users

🌍 Eco-Friendly Dashboard

Sustainability-focused shopping insights

Environmental impact visualization

🛒 Shopping Utilities

Cart management

Wishlist support

Order tracking and history

📊 Data Visualization

Interactive charts for eco-impact analysis

👤 User Profile Management

Personalized user experience

⚡ Fast & Responsive UI

Built with modern React and Vite

🧱 Tech Stack

Frontend: React 19 + TypeScript

Build Tool: Vite

Styling: Tailwind CSS

Routing: React Router (HashRouter)

State Management: Context API

Charts: Recharts

📂 Project Structure
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   ├── Dashboard.tsx
│   │   ├── History.tsx
│   │   ├── About.tsx
│   │   ├── Order.tsx
│   │   ├── Profile.tsx
│   │   ├── Cart.tsx
│   │   └── Wishlist.tsx
│   ├── services/
│   │   ├── authContext.tsx
│   │   ├── cartContext.tsx
│   │   └── wishlistContext.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── types.ts
├── .env.local
├── package.json
├── tsconfig.json
├── vite.config.ts
└── metadata.json

🚀 Getting Started
Prerequisites

Node.js (v18 or later)

npm or pnpm

Installation
npm install

Run in Development Mode
npm run dev

Build for Production
npm run build

Preview Production Build
npm run preview

🔐 Route Protection

EcoBazaarX uses protected routing to ensure secure access:

Public Routes:

/login

/signup

Protected Routes:

/dashboard

/history

/profile

/cart

/wishlist

/order/:id

Unauthorized users are automatically redirected to the login page.

🎯 Project Goals

Encourage eco-conscious shopping behavior

Provide transparency in environmental impact

Deliver a clean, fast, and scalable web application

Serve as a foundation for future sustainability-focused enhancements

📄 Metadata

Project description and configuration are maintained in metadata.json, ensuring clean separation of app metadata from core logic 

metadata

.

📦 Dependencies Overview

All dependencies and scripts are managed via package.json 

package

.

🧠 Future Enhancements

Advanced sustainability scoring models

Recommendation system for eco-friendly alternatives

Backend integration with real product databases

Mobile-first progressive web app (PWA) support

📜 License

This project is currently private and intended for academic and prototype use.