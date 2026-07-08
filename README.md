# Mental Health Welfare

Next.js app for mental health assessment with Google sign-in, MongoDB, and Ant Design.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and fill in your values:

- `MONGODB_URI` — MongoDB connection string
- `AUTH_SECRET` — random secret (e.g. `openssl rand -base64 32`)
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — from [Google Cloud Console](https://console.cloud.google.com/)

3. Configure Google OAuth:

- Create OAuth 2.0 credentials (Web application)
- Authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

4. Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/              # Next.js routes
├── components/       # UI (auth, dashboard)
├── lib/              # auth, mongodb
└── models/           # User, Assessment (future stories/scores)
```

## Auth

- Google OAuth only — no registration, no email OTP
- Users are saved to MongoDB on first sign-in
- `/dashboard` is protected; signed-in users are redirected from `/`

## Future features

The `Assessment` model is ready for story-based cybersecurity scenarios, question answers, and mental health scale scoring.
