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

The root route redirects to `/ko` by default. English is available at `/en`.

## Content Rules

- Focus: Kotlin, Spring, backend architecture, infrastructure, performance, and
  AI/RAG service pipelines.
- Do not add GraphQL, Apollo, or e-commerce API placeholder skills/content.
- Home leads with selected project cases (role, problem, decision, result), followed
  by technical writing and public operating projects.
- Content is maintained statically in `src/content/portfolio.ko.tsx` and
  `src/content/portfolio.en.tsx`; no backend or environment variables are needed.
- Add a verified public article URL to a case's optional `article: { label, href }`
  field in both locales when the detailed post is published. Omit the field
  while unpublished; do not substitute private repositories or placeholder URLs.
- Technical posts live in `writing`, separate from the broader `caseStudies`.

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
- Public routes: `/en`, `/ko`

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
