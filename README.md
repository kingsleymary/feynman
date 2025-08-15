# Richard Feynman Biography Website

A tribute website dedicated to Nobel Prize-winning physicist *Richard Feynman*.  
This site consolidates dispersed information into a single, visually engaging, and interactive platform.

---

## 📌 Project Overview
The Richard Feynman Biography Website presents an organized, multimedia-rich biography of Richard Feynman, featuring:
- Biography, Education, and Career timeline
- Research contributions
- Awards and honors (with modals for more details)
- Selected works
- Photo gallery
- Interactive carousel and navigation

---

## 🎯 Goals
- Provide accurate and accessible information about Richard Feynman.
- Deliver a responsive, interactive, and visually consistent interface.
- Showcase content in a way that blends education and engagement.

---

## 📂 Figma Design Files
- *Main Design:* [Figma Design Link](https://www.figma.com/design/aucc4qPI6Pra69FGC02IKL/Untitled?node-id=0-1&t=EjumS0Kmz4b9rO0q-1)  
- *Dev Mode:* [Figma Dev Mode](https://www.figma.com/design/aucc4qPI6Pra69FGC02IKL/Untitled?node-id=0-1&m=dev&t=EjumS0Kmz4b9rO0q-1)  
- *Prototype:* [Figma Prototype](https://www.figma.com/proto/aucc4qPI6Pra69FGC02IKL/Richard-Fynman?node-id=0-1&t=EjumS0Kmz4b9rO0q-1)

---
## 🔗 Website Link
https://feynman-ceur.vercel.app/

---
## Github Repo
https://github.com/kingsleymary/feynman

## 🎨 Design System

### Colors
| Token                   | HEX       | Usage |
|-------------------------|-----------|-------|
| --accent-orange       | #ff7a00 | Buttons, highlights, topic headings |
| --accent-dark-on-accent | #0b0b0b | Dark text on accent backgrounds |
| --hero-author-color   | #ffffff | Hero author text |
| --hero-topic-color    | #ff7a00 | Hero topic title |
| --hero-desc-color     | rgba(255,255,255,0.95) | Hero description text |
| Background (light mode) | #f2f2f2 | Page background |
| Background (dark mode)  | #b3b1b1 | Body background when dark mode is active |
| Text (default)          | rgb(19, 18, 18) | Main text color |

---

### Typography
- *Primary Font:* [Montserrat](https://fonts.google.com/specimen/Montserrat) (Google Fonts)
- *Weights Used:* 100–900 (various for headings, body, bold text)
- *Body Text Size:* ~1.4rem (22px equivalent) for paragraphs
- *Headings:*
  - Hero Title: 4.5rem
  - Section Titles: 3rem
  - Subheadings: 1.9rem–2rem

---

## 🖼 Assets
- *Images:* Stored in /images/
- *Formats:* .jpg, .png, .svg, .webp
- *Export Recommendation:*  
  - SVG for icons and diagrams  
  - PNG/JPG for photography  
  - Optimize images before deployment for performance

---

## 🔄 Navigation Flow
1. *Hero Carousel* — 3 slides with topic highlights.
2. *Biography* — Personal life, relationships, personality.
3. *Education & Career* — Timeline cards with images.
4. *Career Graph* — Includes chart and descriptive text.
5. *Research* — QED details with diagrams.
6. *Awards* — Interactive modals for award descriptions.
7. *Selected Works* — Featured publications.
8. *Gallery* — Grid of images.
9. *Sitemap* — Quick navigation to all sections.
10. *Footer* — Current date, location, IP address.

---

## ⚙ Developer Notes

### Core Files
- *HTML:* index.html — Contains semantic sectioning and modal structures.
- *CSS:* main.css — Handles theming, layout, responsive breakpoints, and animations.
- *JavaScript:* index.js — Implements:
  - Carousel auto-play & manual navigation
  - Dark mode toggle
  - Mobile navigation menu toggle
  - Smooth scrolling for section links
  - Award modals open/close logic

### Dark Mode
Activated via toggle switch (#switch):
```css
body.dark {
  background-color: #b3b1b1;

}

