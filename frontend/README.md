# SMARTKRISHI Frontend

A Next.js application for the SMARTKRISHI agriculture platform - Your Smart Crop Doctor & Farming Assistant.

## Getting Started

First, install the dependencies (if not already done):

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Runs the development server on http://localhost:3000
- `npm run build` - Builds the production application
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint for code quality

## Project Structure

```
frontend/
├── pages/              # Next.js pages
│   ├── index.js       # Home page with hero section
│   ├── about.js       # About page
│   ├── doctor.js      # Crop disease diagnosis page
│   ├── features.js    # Features showcase
│   ├── product.js     # Products & services
│   ├── _app.js        # App wrapper with Layout
│   └── _document.js   # HTML document structure
├── components/         # Reusable components
│   ├── Layout.js      # Main layout wrapper
│   ├── Navbar.js      # Navigation bar
│   └── *.module.css   # Component styles
├── styles/            # Stylesheets
│   ├── globals.css    # Global styles
│   └── *.module.css   # Page-specific styles
├── public/            # Static assets
│   ├── plant-hand.jpg # Hero image (placeholder)
│   └── step*.jpg      # Step images (placeholders)
└── package.json       # Dependencies and scripts
```

## Pages

- **HOME** - Main landing page with hero section and overview
- **ABOUT** - Information about SmartKrishi mission and vision
- **DOCTOR** - Upload crop images for AI-powered disease diagnosis
- **FEATURES** - Comprehensive list of platform features
- **PRODUCT** - Products and services offered

## Features

- 🌱 AI-powered crop disease detection
- ⚡ Real-time analysis and recommendations
- 📱 Fully responsive design
- 🎨 Modern UI with green agriculture theme

## Customization

### Adding Images

Replace the placeholder SVG files in the `/public` folder with actual images:
- Replace `plant-hand.jpg` with your hero image
- Replace `step1.jpg` through `step5.jpg` with actual step illustrations

### Connecting to Backend

Update the API calls in `/pages/doctor.js` to connect to your backend server for actual disease diagnosis.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

Then deploy the `.next` folder to your hosting platform.
