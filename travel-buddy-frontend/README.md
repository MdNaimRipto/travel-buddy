# Travel Buddy — Frontend 🌍

**Travel Buddy** is a responsive Next.js frontend for a travel booking platform. It provides search, listings, detailed hotel pages, user auth and dashboards for buyers and sellers built with TypeScript, Tailwind CSS and MUI.

---

## Key features ✅

- Customer-facing pages: home, destinations, hotels, hotel details, reservations, and user profile
- Authentication and social login integration (NextAuth)
- Dashboard components for admin/seller/user flows
- Reusable UI components (cards, forms, loaders, toasts, etc.)
- Map support via Leaflet and interactive UI with Framer Motion
- Image upload and reservation flow utilities

## Tech stack & notable libs 🔧

- Framework: **Next.js 14** (TypeScript)
- Styling: **Tailwind CSS** and **MUI**
- State: **Redux Toolkit**
- Maps: **Leaflet** + **react-leaflet**
- Animations: **Framer Motion**, **Lottie**
- Auth: **next-auth**

## Quick start — local development 🚀

1. Install dependencies

   ```bash
   npm install
   ```

2. Run dev server

   ```bash
   npm run dev
   ```

3. Open http://localhost:3000

> Environment variables are managed in `src/configs/envConfig.ts` — make sure any API URLs / auth secrets used by the backend are available locally.

## Scripts 📜

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — run built app
- `npm run lint` — run Next.js linter

## Project structure (high level) 📁

- `src/pages` — Next.js pages and API routes
- `src/components` — reusable UI components
- `src/layouts` — layout components for app sections
- `src/redux` — store, apis and slices
- `src/configs` — environment & theme configs

## Contributing ✨

- Keep changes small and focused
- Add component tests where appropriate
- Run lint and confirm app builds before opening a PR

---

If you want, I can expand the README with a screenshot, deployment notes, or environment-variable examples. 💡
