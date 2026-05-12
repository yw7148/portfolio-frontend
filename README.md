# Portfolio Frontend

Template-first portfolio frontend for Youngwon Kim.

## Design Source

This branch intentionally starts from a public/free OSS portfolio template instead
of a custom design.

- Template: `dillionverma/portfolio`
- Source: https://github.com/dillionverma/portfolio
- License: MIT
- Notice: see `THIRD_PARTY_NOTICES.md`

Paid templates or paid component packs are not used in this implementation.

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- next-intl
- Motion for React
- shadcn/ui-style primitives from the template
- Magic UI public dock/fade/grid modules from the template

## Routes

- `/en`
- `/ko`
- `/en/cv`
- `/ko/cv`

The root route redirects to `/en`.

## Content Rules

- Focus: Kotlin, Spring, backend architecture, infrastructure, performance, and
  AI/RAG service pipelines.
- Do not add GraphQL, Apollo, or e-commerce API placeholder skills/content.
- Home is a concise operating-services hub.
- CV contains detailed career history and architecture impact.

## Local Development

```bash
npm install
npm run dev
```

## Environment

No environment variables are required for the current frontend.

The previous Vite proxy variables are intentionally not used by this Next.js
app. If new runtime configuration is introduced later, add it to `.env.example`
at the same time as the code that reads it.

## Deployment Notes

The app is expected to deploy as a Next.js project on Vercel.

- Framework preset: `Next.js`
- Build command: `npm run build`
- Output directory: Vercel default for Next.js
- Public routes: `/en`, `/ko`, `/en/cv`, `/ko/cv`

If a deployment is `READY` but the public URL returns Vercel
`x-vercel-error: NOT_FOUND`, first check Vercel project settings rather than
environment variables:

- Domains for `youngwon.me` and `portfolio.youngwon.me` are assigned to this
  project and show `Valid Configuration`.
- Production Deployment Protection is disabled or intentionally configured for
  public access.
- The production alias points to the latest ready deployment.

## Verification

```bash
npm run lint
npm run build
```
