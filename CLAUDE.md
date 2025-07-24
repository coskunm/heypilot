# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based presentation application for HeyPilot AI call center solution, built with TypeScript, Vite, and Tailwind CSS. The application is a slide-based presentation system with 11 slides showcasing AI call center capabilities for different industries (healthcare, e-commerce, finance).

## Development Commands

- `npm run dev` - Start development server (uses Vite)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview production build locally

## Architecture

### Core Structure
- **App.tsx**: Main application component containing slide navigation logic, keyboard controls, auto-play functionality, and presentation state management
- **slides/**: Directory containing individual slide components (Slide1.tsx through Slide8.tsx, plus Slide5a.tsx, Slide5b.tsx, Slide5c.tsx for industry-specific examples)
- **main.tsx**: Application entry point with React StrictMode
- **index.css**: Global styles and Tailwind imports

### Key Features
- **Slide Navigation**: Arrow keys, spacebar, Home/End keys, and mouse controls
- **Auto-play Mode**: 8-second intervals with play/pause controls
- **Progress Tracking**: Visual progress bar and slide counter
- **Animated Transitions**: Direction-aware slide transitions with CSS animations
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite with React plugin
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React
- **Linting**: ESLint with TypeScript and React plugins

### Slide Component Pattern
Each slide component follows this interface:
```typescript
interface SlideProps {
  direction?: 'next' | 'prev';
}
```

Slides use Tailwind classes for styling and include animated background gradients, typography animations, and responsive layouts.

## Configuration Files
- **vite.config.ts**: Vite configuration with React plugin and lucide-react optimization
- **tailwind.config.js**: Tailwind CSS configuration for content scanning
- **eslint.config.js**: Modern ESLint flat config with TypeScript and React rules
- **tsconfig.json**: TypeScript project references to app and node configs