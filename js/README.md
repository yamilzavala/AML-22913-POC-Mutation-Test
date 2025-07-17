# Mutation Test Project

## Project Goal
This project demonstrates a full-stack JavaScript application with a React frontend and an Express backend. The goal is to provide a simple user management UI that fetches user data from an API, with a focus on code quality, testing, and maintainability.

---

## Folder Structure

```
mutation-test/
└── js/
    ├── client/
    │   └── js-frontend/    # React + Vite frontend
    └── server/             # Express backend
```

### `js/client/js-frontend` (Frontend)
- Built with **React** + **Vite**.
- Contains all source code in the `src/` folder.
- Uses **Jest** and **Testing Library** for unit testing.
- ESLint for linting and code quality.

#### Scripts (run from `js/client/js-frontend`):
- `npm install` — Install dependencies
- `npm run dev` — Start the development server (http://localhost:5173 by default)
- `npm run build` — Build for production
- `npm run preview` — Preview the production build
- `npm run test` — Run tests
- `npm run lint` — Lint the codebase

---

### `js/server` (Backend)
- Built with **Express**.
- Serves API endpoints for user data.
- Uses **CORS** for cross-origin requests.

#### Scripts (run from `js/server`):
- `npm install` — Install dependencies
- `npm run dev` — Start the backend server (http://localhost:4000)

---

## Prerequisites
- Node.js v18+ recommended
- npm v9+ recommended

---

## Getting Started

1. **Install dependencies:**
   - Frontend: `cd js/client/js-frontend && npm install`
   - Backend: `cd js/server && npm install`

2. **Run the backend:**
   ```sh
   cd js/server
   npm run dev
   ```

3. **Run the frontend:**
   ```sh
   cd js/client/js-frontend
   npm run dev
   ```

4. Open your browser to [http://localhost:5173](http://localhost:5173) (frontend) and ensure the backend is running at [http://localhost:4000](http://localhost:4000).

---

## Notes
- The frontend fetches user data from the backend, which proxies requests to https://jsonplaceholder.typicode.com/users.
- For development, ensure both servers are running simultaneously.

---

## License
MIT
