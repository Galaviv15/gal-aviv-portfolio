# Gal Aviv's Professional Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Blue Theme**: Professional dark theme with white text and blue accents
- **Navigation Bar**: Fixed navigation with profile image and quick links
- **Hero Section**: Engaging intro with profile image and CTA buttons
- **Skills Carousel**: Animated carousel showcasing technologies and tools
- **Projects Showcase**: Featured projects with descriptions and GitHub links
- **Contact Section**: Easy access to LinkedIn, GitHub, and email

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Navigate to the project directory
```bash
cd my-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The optimized files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Top navigation bar
│   ├── Hero.tsx          # Hero/intro section
│   ├── SkillsCarousel.tsx # Skills showcase
│   ├── Projects.tsx      # Featured projects
│   └── Footer.tsx        # Contact and social links
├── App.tsx               # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Customization

### Adding a Profile Image

1. Place your `me.png` image in the `public/` directory
2. Update the `Navigation` and `Hero` components to pass the image path

### Updating Projects

Edit the `PROJECTS` array in [src/components/Projects.tsx](src/components/Projects.tsx) to add, remove, or update projects.

### Modifying Skills

Edit the `SKILLS` array in [src/components/SkillsCarousel.tsx](src/components/SkillsCarousel.tsx) to customize technologies and tools.

## Colors

- Background: `#0f172a` (slate-900)
- Accent: `#3b82f6` (blue-500)
- Text: White
- Secondary Text: Light Gray

## License

MIT
