🌿 EcoBazaarX: Carbon-Footprint Aware Shopping Assistant
EcoBazaarX is a web application designed to help users shop consciously by providing insights into the carbon footprint of products. It features a secure authentication system, a personalized dashboard, and visualizations of the user's environmental impact.

✨ Features
Secure Authentication: User signup and login functionality.

Protected Routes: Ensures only authenticated users can access the dashboard.

Eco-Friendly Dashboard: A central hub to view shopping insights and environmental impact.

Carbon Footprint Awareness: Products are modeled with a carbonFootprint and ecoScore to guide users.

🛠️ Tech Stack
This project is built with the following technologies:

Frontend: React (version 19.2.1)

Routing: React Router DOM (version 7.10.0)

Styling: Tailwind CSS (configured in index.html)

Charting: Recharts (version 3.5.1)

Icons: Lucide-react (version 0.555.0)

Language: TypeScript (~5.8.2)

Build Tool: Vite (version 6.2.0)

🚀 Getting Started
Prerequisites
Node.js and npm/yarn/pnpm installed.

Installation
Clone the repository (if applicable).

Install dependencies:

Bash

npm install
# or
yarn install
# or
pnpm install
Set up environment variables: The project uses a local environment file (.env.local) to manage configuration, such as API keys.

GEMINI_API_KEY=PLACEHOLDER_API_KEY
Note: The .env.local file is excluded from version control by the .gitignore rule *.local.

Running the Application
Development Server:

Bash

npm run dev
# or
yarn dev
# or
pnpm dev
This command starts the Vite development server.

Production Build:

Bash

npm run build
# or
yarn build
# or
pnpm build
This command creates a production-ready build in the dist directory.

Preview Production Build:

Bash

npm run preview
# or
yarn preview
# or
pnpm preview
This command serves the built application for a production preview.

📂 File Structure Overview
index.html: The main entry point, including Tailwind CSS configuration and import maps for dependencies.

index.tsx: Renders the main App component into the DOM root.

App.tsx: Sets up the application's routing (/login, /signup, /dashboard) using react-router-dom and wraps the app with AuthProvider for state management. It also defines the ProtectedRoute component.

types.ts: Defines TypeScript interfaces for User, Product, and AuthState.

package.json: Lists all project dependencies and scripts.

.gitignore: Specifies files and folders to be ignored by Git, including node_modules and .local files.

.env.local: Stores local environment variables.