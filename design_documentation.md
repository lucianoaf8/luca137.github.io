# Design Documentation for Luca137 Portfolio Site

## Overall Design

The site features a modern, sci-fi inspired design with a dark theme and neon accents. It utilizes a single-page layout with sections for Hero, Portfolio, Skills, and Contact.

## Color Palette

- Primary Background: #1F1F1F (custom-bg)
- Secondary Background: #2F2F2F (custom-bg-gradient-end)
- Primary Text: #C0C0C0 (custom-text)
- Accent: #00FF80 (custom-accent)
- Accent Dark: #00CC66 (custom-accent-dark)
- Shadow Dark: #1A1A1A (custom-shadow-dark)
- Shadow Light: #242424 (custom-shadow-light)

Colors are configured in the `tailwind.config.cjs` file.

## Typography

- Primary Font: 'Lato', sans-serif
- Accent Font: 'Orbitron', sans-serif
- Additional Font: 'Exo 2', sans-serif

## Layout

- Responsive design with mobile-first approach
- Flexbox and CSS Grid for layouts
- Single-page application (SPA) structure

## Components

1. Header: Fixed navigation with hamburger menu for mobile
2. Hero: Showcases profile image with flip animation and social links
3. Portfolio: Grid layout with flip cards for projects and GPTs
4. Skills: Grid layout with animated skill cards
5. Contact: Form with custom styling and success message
6. Footer: Simple footer with copyright information

## Animations and Effects

- Flip animations on cards
- Hover effects on buttons and links
- Gradient text animations
- Rotating background effect
- Custom button hover states

## Technologies

- Svelte / SvelteKit
- Tailwind CSS
- FontAwesome for icons
- Custom CSS animations

## Styling Approach

- Tailwind CSS for utility-first styling
- Custom CSS for complex animations and effects
- CSS-in-JS for component-specific styles

## Responsive Design

- Mobile-first approach with responsive breakpoints
- Flexbox and CSS Grid for flexible layouts
- Custom responsive adjustments for various screen sizes

## Accessibility

- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color scheme

## Performance Considerations

- Lazy loading of images
- Efficient use of CSS animations
- Optimized asset loading

This design system creates a cohesive, futuristic look that aligns with the theme of AI and data analysis, while providing a smooth and engaging user experience.