# CPS Test - Frontend Application

The frontend application for the CPS (Clicks Per Second) Testing Tool.

## What is CPS?

CPS (Clicks Per Second) is a measure of how many times per second a user can click their mouse. This application allows you to test your clicking speed and see your results in real-time.

## Features

- **Real-time CPS Calculation**: Monitor your clicks per second as you test
- **Adjustable Duration**: Choose how long you want to test (in seconds)
- **Click Counter**: Track total clicks during your test
- **Responsive Design**: Works on desktop and tablet devices
- **Modern Stack**: Built with React 19, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see the application.

### Production Build

```bash
npm run build
```

Builds the application for production to the `dist/` folder.

### Preview Build

```bash
npm run preview
```

Locally preview the production build.

### Lint

```bash
npm run lint
```

Run ESLint to check for code quality issues.

## Components

- **App.tsx** - Main application component with test logic
- **Card.tsx** - Reusable card component for displaying information
- **Github.tsx** - GitHub link component

## Styling

This project uses Tailwind CSS for styling. The configuration is in `tailwind.config.js`.

## TypeScript

The project is fully typed with TypeScript. Check `tsconfig.json` for compiler options.

## React Compiler

The React Compiler is enabled by default for better performance optimization. This helps identify potential bugs and optimize component rendering automatically.


```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
