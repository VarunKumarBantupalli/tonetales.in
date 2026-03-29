# ToneTales - Music Entertainment Platform

A modern React-based web application for a music entertainment company, featuring artist booking, merchandise sales, admin management, and user authentication.

## Overview

ToneTales is a comprehensive platform that connects music enthusiasts with artists, provides booking services, offers merchandise, and includes administrative tools for managing the business operations.

## Technologies Used

### Languages
- **JavaScript** (ES6+ syntax, primary language)
- **JSX** (React syntax extension)

### Frameworks & Libraries
- **React** (v18.3.1) - Main frontend framework
- **React DOM** (v18.3.0) - React rendering library
- **React Router DOM** (v7.1.5) - Client-side routing
- **Firebase** (v11.3.0) - Authentication and backend services
- **GSAP** (v3.12.5) - Animation library
- **Lucide React** (v0.475.0) - Icon library
- **React Icons** (v5.4.0) - Additional icon library

### Build Tools & Development
- **Vite** (v5.4.8) - Build tool and development server
- **ESLint** (v9.11.1) - Code linting
- **PostCSS** (v8.4.47) - CSS processing
- **Autoprefixer** (v10.4.20) - CSS vendor prefixing

### Styling
- **Tailwind CSS** (v3.4.14) - Utility-first CSS framework
- **@GSAP/React** (v2.1.1) - GSAP React integration

### Development Dependencies
- **@ViteJS/Plugin-React** (v4.3.2) - Vite React plugin
- **@Types/React** (v18.3.10) - TypeScript types for React
- **@Types/React-DOM** (v18.3.0) - TypeScript types for React DOM
- **ESLint Plugin React** (v7.37.0) - ESLint React rules
- **ESLint Plugin React Hooks** (v5.1.0-rc.0) - React hooks linting
- **ESLint Plugin React Refresh** (v0.4.12) - React fast refresh linting
- **Globals** (v15.9.0) - Global ESLint variables
- **@ESLint/JS** (v9.11.1) - ESLint JavaScript config

### Deployment & Hosting
- **Vercel** - Deployment platform (indicated by vercel.json)

### Assets & Media
- **Images**: JPG, PNG formats
- **Vectors**: SVG files
- **Videos**: MP4 format
- **Audio**: (implied by music/entertainment theme)

## Features

- **Single Page Application** (SPA) with client-side routing
- **Component-based architecture** with organized folders (Home, Booking, Admin, etc.)
- **Authentication system** with protected routes
- **Admin dashboard** with user management
- **Artist booking system**
- **Merchandise store**
- **Newsletter subscription**
- **Contact forms**
- **Responsive design** with Tailwind CSS
- **Animations** using GSAP
- **Firebase integration** for authentication and data

## Project Structure

```
src/
├── components/
│   ├── Home/
│   │   ├── Artists.jsx
│   │   ├── Band.jsx
│   │   ├── Clients.jsx
│   │   ├── Home.jsx
│   │   ├── Info.jsx
│   │   ├── Landing.jsx
│   │   ├── Services.jsx
│   │   ├── Socialmedia.jsx
│   │   └── Stats.jsx
│   ├── Booking/
│   │   ├── AllArtists.jsx
│   │   └── Booking.jsx
│   ├── Contact/
│   │   └── Contactus.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── Navbar/
│   │   └── Navbar.jsx
│   ├── Newsletter/
│   │   └── Newsletter.jsx
│   ├── Merchandise/
│   │   └── Merchandise.jsx
│   ├── Admin/
│   │   ├── Dashboard.jsx
│   │   ├── EditArtists.jsx
│   │   └── Subscribers.jsx
│   ├── Login/
│   │   ├── Auth.jsx
│   │   └── ProtectedRoute.jsx
│   ├── Hiring.jsx
│   └── ScrollToTop.jsx
├── authentication/
│   └── firebase.js
├── javascript/
│   └── data/
│       └── artists.js
├── assets/
│   ├── images/
│   ├── svgs/
│   └── videos/
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tonetales.in
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally

## Deployment

The project is configured for deployment on Vercel. The `vercel.json` file contains the deployment configuration.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Commit your changes
6. Push to the branch
7. Create a Pull Request

## License

This project is licensed under the MIT License.
