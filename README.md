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

## Verification

```bash
npm run lint
npm run build
```
