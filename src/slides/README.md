# Showcase Content Slides

This folder contains all the presentation slides for the Single-SPA Showcase.

## Current Slides (Intro Section)

### ✅ Completed:
1. **IntroSlide.tsx** - Main title slide
   - Route: `/`
   - Title: "Microfrontends with Single-SPA"
   - Subtitle: "The Good, Bad & Ugly"

2. **AboutSlide.tsx** - Talk overview
   - Route: `/about`
   - What we'll cover
   - Speaker's context (8 → 40+ MFEs)

3. **SetupSlide.tsx** - Initial situation
   - Route: `/setup`
   - Organization structure
   - The Problem (custom Web Components)
   - The Solution (Single-SPA migration)

4. **SpoilersSlide.tsx** - Success preview
   - Route: `/spoilers`
   - Success story
   - Scale achievement (8 → 40+ MFEs across 5 sites)
   - The journey narrative

### 🚧 To Be Created:
- Architecture section slides
- "The Good" section slides
- "The Bad" section slides
- "The Ugly" section slides
- Q&A/End slide

## Styling

All slides use the Dracula-inspired color scheme defined in `slides.css`:
- Purple gradients for titles (`#bd93f9`, `#ff79c6`)
- Green for success/solutions (`#50fa7b`)
- Cyan for highlights (`#8be9fd`)
- Red for problems (`#ff5555`)
- Orange for emphasis (`#ffb86c`)

## Navigation

Routes are handled by React Router in `root.component.tsx` and integrated with:
- Shell navigation (header buttons)
- Progress bar (slide counter and prev/next)
- Single-SPA routing
