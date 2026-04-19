# 3D Print Business (Vite + React + Supabase)

> **Important:** this repository is currently a Vite React app, not a Next.js App Router project.

## Environment setup

1. Copy the environment template:

```bash
cp .env.example .env
```

2. Fill in:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

3. Do **not** put `SUPABASE_SERVICE_ROLE_KEY` in this client app.

## Security notes

- Public catalog queries now fail safely (empty state) if env vars are missing or Supabase schema/tables are not ready.
- Supabase errors are logged for developers without crashing page render flows.
- This client repository should only use anon/public keys.

## Manual remediation required

If a service-role key was ever committed or exposed previously:

1. Open Supabase Dashboard → Project Settings → API.
2. Rotate the **service_role** key manually.
3. Replace backend/server secrets in your secure runtime (not in this frontend repo).

## Development

```bash
npm install
npm run dev
```
