# Creative Labz — Portfolio Website

A modern dark-themed portfolio website built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Inspired by the aesthetic of [Creative Apes Design](https://creativeapes.design/), this portfolio showcases design, motion, and interactive web projects in a clean, scalable layout.

## Features

- ✨ Dark theme with subtle gradient background
- 🎨 Responsive navigation with mobile menu
- 🏠 Hero section with animations
- 💼 Featured work showcase grid
- 🛠 Services overview cards
- 📝 About section
- 🤝 Client logo grid
- 📬 Contact form
- 🎭 Framer Motion scroll animations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

Make sure you have **Node.js 18+** and **npm** installed.

### Installation

```bash
npm install
```

### Development

Start the dev server at [http://localhost:3000](http://localhost:3000):

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Start Production

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Section.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Work.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Clients.tsx
│   └── Contact.tsx
└── data/
    └── projects.ts
```

## Customization

- **Colors & Theme**: Update `src/app/globals.css` and `tailwind.config.ts`.
- **Projects**: Edit `src/data/projects.ts` to add your own work.
- **Content**: Modify section files in `src/sections/` to personalize copy.
- **Images**: Replace placeholders in `public/projects/` and `public/clients/`.

## License

MIT

---

Built with ❤️ by Creative Labz

