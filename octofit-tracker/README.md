# OctoFit Tracker

Modern multi-tier application scaffold for OctoFit Tracker.

## Structure

- `frontend/` — React 19 + Vite presentation tier
- `backend/` — Node.js + Express + TypeScript logic tier
- `MongoDB` — expected to run on `mongodb://127.0.0.1:27017`

## Ports

- Frontend: `5173`
- Backend: `8000`
- MongoDB: `27017`

## Frontend

Install dependencies:

```bash
cd octofit-tracker/frontend
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Backend

Install dependencies:

```bash
cd octofit-tracker/backend
npm install
```

Run development server:

```bash
npm run dev
```

Build the backend:

```bash
npm run build
```

Start the built backend:

```bash
npm start
```

## Notes

- Backend connects to MongoDB at `mongodb://127.0.0.1:27017/octofit-tracker` by default.
- Set `PORT` or `MONGODB_URI` environment variables to override defaults.
