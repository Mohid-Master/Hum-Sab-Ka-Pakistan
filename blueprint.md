# SidePanel Component Blueprint

## Overview

Create a fixed SidePanel component to replace the Navbar, containing a Like button, Theme Toggle, and Language Switcher. This enhances the user experience by providing easy access to these features without occupying space in a traditional navigation bar.

## Project Outline

The project is a Next.js application using the App Router, with Firebase integration for features like the like counter. It includes components for theme toggling, language switching, and animations.

## Current Plan

1.  Create a new React component `SidePanel.tsx` in `src/lib/ui/components/layouts`.
2.  Move or adapt the functionality of the `Navbar` to the new `SidePanel` component.
3.  Include the `LikeCounter`, `ThemeToggle`, and `LanguageSwitcher` components within `SidePanel.tsx`.
4.  Style the `SidePanel` component to be a fixed element on the side of the screen (e.g., using Tailwind CSS for positioning and styling).
5.  Replace the `Navbar` component with the `SidePanel` component in `src/app/layout.tsx`.