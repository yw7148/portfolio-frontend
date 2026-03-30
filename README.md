# Portfolio Frontend (React)

5년차 Backend Engineer 김영원의 포트폴리오를 React + Vite로 재구성한 포트폴리오 프론트엔드입니다.
기존 백엔드 저장소([yw7148/Portfolio](https://github.com/yw7148/Portfolio)) API를 그대로 사용합니다.

`docs/vibe-coding/`를 포트폴리오 바이브 코딩의 단일 문서 허브로 사용하면 됩니다.
새 기획은 `active/`, 확정된 선택은 `decisions/`, 끝난 문서는 `archive/`로 관리하도록 기본 구조를 잡아두었습니다.

## Tech Stack
- React 19
- TypeScript
- Vite
- Plain CSS

## Backend APIs Used
- `POST /portfolio/contact`
- `GET /portfolio/programs?projectId={id}`
- `GET /portfolio/cv` (외부 CV 링크 버튼)

## Local Development
1. Install dependencies
```bash
npm install
```

2. Copy env file
```bash
cp .env.example .env
```

3. Run dev server
```bash
npm run dev
```

기본적으로 Vite는 `/portfolio` 경로를 `VITE_PROXY_TARGET`(기본값 `http://localhost:8080`)으로 프록시합니다.

## Environment Variables
- `VITE_PROXY_TARGET`: 개발 환경 프록시 대상 백엔드 주소
- `VITE_API_BASE_URL`: 배포 환경에서 API 절대 경로가 필요할 때 사용 (예: `https://youngwon.me`)

`VITE_API_BASE_URL`이 비어 있으면 same-origin 상대 경로(`/portfolio/...`)로 요청합니다.

## Build
```bash
npm run build
```

## CI/CD (GitHub Actions)
- Workflow file: `.github/workflows/frontend-ci-cd.yml`
- CI trigger: `main` 브랜치 Pull Request / Push
  - `npm ci`
  - `npm run lint`
  - `npm run build`
- CD trigger: `main` 브랜치 Push
  - Vercel Production 자동 배포

### Required Repo Settings
1. GitHub Repository > `Settings` > `Secrets and variables` > `Actions` > `Secrets`
2. 아래 3개 Secret 등록
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

### Optional Repo Variable
- `Settings` > `Secrets and variables` > `Actions` > `Variables`
- `VITE_API_BASE_URL` (예: `https://youngwon.me`)
  - 설정하면 빌드 시 해당 주소를 API base URL로 사용
