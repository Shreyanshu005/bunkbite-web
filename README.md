# BunkBite Support Website

A modern, responsive React website for BunkBite - the college canteen food ordering app.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🔍 SEO-friendly
- 🎭 Framer Motion animations
- 🎨 Lucide React icons
- 📄 Privacy Policy & Terms of Service pages
- 💬 FAQ section with expandable questions
- 📧 Multiple support contact options

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
bunkbite-website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Support.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Privacy.jsx
│   │   └── Terms.jsx
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── package.json
└── vite.config.js
```

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
npm run build
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify, or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/bunkbite-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```js
export default {
  base: '/bunkbite-website/'
}
```

4. Deploy:
```bash
npm run deploy
```

## Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #f62f56;
  --primary-dark: #d12548;
  --primary-light: #ff4568;
  /* ... */
}
```

### Content

- **Hero Section**: Edit `src/components/Hero.jsx`
- **Features**: Edit `src/components/Features.jsx`
- **FAQ**: Edit `src/components/FAQ.jsx`
- **Contact Info**: Edit `src/components/Contact.jsx`

### Support Emails

Update emails in `src/components/Support.jsx`:
- support@bunkbite.me
- bugs@bunkbite.me
- feedback@bunkbite.me
- partners@bunkbite.me

## App Store Compliance

This website satisfies **App Store Guideline 1.5** by providing:
- Functional support page
- Multiple contact methods
- Privacy Policy
- Terms of Service
- FAQ section
- Clear company information

### Update App Store Connect

1. Go to App Store Connect
2. Navigate to your app
3. Go to App Information
4. Update "Support URL" to your deployed website URL
5. Save changes

## Support

For questions about this website:
- Email: support@bunkbite.me
- Issues: Report on GitHub

## License

Copyright © 2024 BunkBite. All rights reserved.
