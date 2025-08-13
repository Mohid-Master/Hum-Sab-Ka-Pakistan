# Project Blueprint

## Overview
This project is a Next.js application designed to showcase facts and history related to Pakistan. It incorporates modern UI/UX principles, including GSAP animations for scroll-triggered card layouts, dynamic language switching (English/Urdu), and theme toggling (light/dark/Pakistani patriotic theme). The application aims to be visually appealing, responsive, and accessible.

## Detailed Outline of Implemented Features

### Initial Setup
*   Standard Next.js project structure with App Router.
*   `eslint.config.mjs`, `next.config.ts`, `package.json`, `postcss.config.mjs`, `tsconfig.json` for project configuration.
*   `.idx/dev.nix` for Nix environment configuration.
*   `public` directory containing static assets like images, audio files, and JSON data for facts and history.

### Context Management
*   **`src/context/LanguageContext.tsx`**:
    *   Manages the global language state (`'english'` or `'urdu'`).
    *   Persists language preference in `localStorage`.
    *   Provides `language` state, `setLanguage` function, and `toggleLanguage` function via a React Context API hook (`useLanguage`).
*   **`src/context/ThemeContext.tsx`**:
    *   Manages the global theme state (`'light'`, `'dark'`, or `'pakistani'`).
    *   Persists theme preference in `localStorage`.
    *   Applies theme classes to `document.documentElement` (for Tailwind dark mode) and `data-theme` attribute.
    *   Includes a GSAP animation for smooth background and text color transitions when the theme changes.
    *   Provides `theme` state, `setTheme` function, and `toggleTheme` function via a React Context API hook (`useTheme`).

### Layout & Navigation
*   **`src/app/layout.tsx`**:
    *   Root layout for the application, wrapping children with `LanguageProvider` and `ThemeProvider` for global context availability.
    *   Imports global CSS (`globals.css`).
    *   Sets up basic HTML structure.
*   **`src/lib/ui/components/layouts/Navbar.tsx`**: (Assumed to exist based on file list) Provides global navigation.
*   **`src/lib/ui/components/layouts/Footer.tsx`**: (Assumed to exist based on file list) Provides footer content.
*   **`src/lib/ui/components/layouts/SidePanel.tsx`**: (Assumed to exist based on file list) Potentially for navigation or additional content.

### Interactive Components
*   **`src/lib/ui/components/interactives/LanguageSwitcher.tsx`**: (Assumed to exist) Component to switch between English and Urdu.
*   **`src/lib/ui/components/interactives/ThemeToggle.tsx`**: (Assumed to exist) Component to toggle between light, dark, and Pakistani themes.
*   **`src/lib/ui/components/dataDisplay/LikeCounter.tsx`**: (Assumed to exist) For displaying likes.
*   **`src/app/actions/Likes.tsx`**: (Assumed to exist) Server action for handling likes.
*   **`src/lib/ui/components/interactives/Bajao.tsx`**: (Assumed to exist) Likely for playing audio (referencing `baja.mp3`).
*   **`src/lib/ui/components/interactives/Player.tsx`**: (Assumed to exist) General audio player component.

### Data & Content
*   **`public/facts/facts.json`**: JSON file containing factual information about Pakistan in both English and Urdu.
*   **`public/history/history.json`**: JSON file containing historical information about Pakistan in both English and Urdu, including years.

### Animation
*   **`src/lib/ui/components/Animations/AnimatedText.tsx`**: (Assumed to exist) A reusable component for text animations.

### Current Features (from existing files):
*   `src/app/Loading.tsx`: A loading component.
*   `src/app/Transition.tsx`: A transition component.
*   `src/app/manifest.ts`: Web app manifest.
*   `src/lib/firebase/firebaseConfig.ts`: Firebase configuration.

## Plan for Current Request: History and Facts Pages with GSAP Animated Scroll-Triggered Card Layouts

The user wants the GSAP animated, scroll-triggered card layout and associated design elements to be implemented on the dedicated `/facts` and `/history` pages, instead of the main `/` page. The main page (`src/app/page.tsx`) should be simplified. Additionally, metadata and Lucide React icons should be integrated, and styling should strictly use direct Tailwind color classes (e.g., `bg-[#000]`).

### Actionable Steps:

1.  **Update `src/app/page.tsx` (Revert Card Layout):**
    *   Remove the facts and history sections and all related card rendering logic.
    *   Remove GSAP and ScrollTrigger imports and animation logic specific to the cards.
    *   Keep the `AnimatePresence` and `Transition` for the initial loading experience.
    *   Simplify the main content to a welcoming message or basic structure.

2.  **Create `src/app/facts/layout.tsx`:**
    *   Create a new `layout.tsx` file inside `src/app/facts`.
    *   Define metadata for the facts page (title, description).
    *   Import and use `useLanguage` and `useTheme` if needed for shared UI elements within this specific layout.
    *   Wrap the `children` (the `page.tsx` for facts) within this layout.
    *   Apply base Tailwind CSS classes for background color based on `theme`.

3.  **Update `src/app/facts/page.tsx`:**
    *   Ensure `'use client'` directive is present.
    *   Import `React`, `useEffect`, `useRef`, `gsap`, `ScrollTrigger`, `useLanguage`, `useTheme`, `AnimatedText`, `factsData`.
    *   Implement the GSAP scroll-triggered card layout specifically for `factsData`.
    *   Use direct Tailwind CSS color classes for card backgrounds and text based on the `theme` context (e.g., `bg-[#01411C]`, `text-[#ffffff]`, `shadow-[0_20px_50px_rgba(0,0,0,0.8)]`).
    *   Integrate Lucide React icons (e.g., `InfoIcon` or `BookOpen`). Install `lucide-react` if not already installed.

4.  **Create `src/app/history/layout.tsx`:**
    *   Create a new `layout.tsx` file inside `src/app/history`.
    *   Define metadata for the history page.
    *   Import and use `useLanguage` and `useTheme` if needed for shared UI elements within this specific layout.
    *   Wrap the `children` (the `page.tsx` for history).
    *   Apply base Tailwind CSS classes for background color based on `theme`.

5.  **Update `src/app/history/page.tsx`:**
    *   Ensure `'use client'` directive is present.
    *   Import `React`, `useEffect`, `useRef`, `gsap`, `ScrollTrigger`, `useLanguage`, `useTheme`, `AnimatedText`, `historyData`.
    *   Implement the GSAP scroll-triggered card layout specifically for `historyData`.
    *   Use direct Tailwind CSS color classes for card backgrounds and text based on the `theme` context.
    *   Integrate Lucide React icons (e.g., `HistoryIcon` or `Calendar`).

6.  **Install `lucide-react`:**
    *   Run `npm install lucide-react` in the terminal.

7.  **Enhance `src/app/globals.css` (if necessary):**
    *   Add any global styles required for the noise texture or advanced shadow effects (though many can be done directly with Tailwind classes).

8.  **Post-Modification Checks:**
    *   Run `npm run lint -- --fix`.
    *   Monitor the dev server for compilation and runtime errors.
    *   Visually inspect the browser preview for correct layout, animations, and responsiveness on `/`, `/facts`, and `/history` pages.
    *   Verify language and theme switching on all pages.
    *   Check metadata in browser dev tools.