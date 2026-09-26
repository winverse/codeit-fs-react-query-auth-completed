# React Query Auth Client

Next.js(App Router) + React Query 기반 인증 프론트엔드입니다.

## 사전 요구 사항

- Node.js
- `pnpm`
- 백엔드 서버 실행 중 (`http://localhost:5001`)

## 실행 방법

설치와 실행은 저장소 루트 `README.md`의 순서를 따릅니다. 개발 서버는 저장소 루트에서 다음 명령으로 실행합니다.

```bash
pnpm --dir client dev
```

- 기본 URL: `http://localhost:3000`

## 백엔드 연결

- 브라우저에서 백엔드를 직접 호출합니다. 기본 주소는 `http://localhost:5001`이며 `/api` 경로는 프론트 요청 유틸에서 자동으로 붙습니다.
- 환경 변수 파일 없이 기본 주소로 요청합니다. 서버 주소를 바꾼 경우에만 `.env.example`을 `.env.development`로 복사해 `NEXT_PUBLIC_BACKEND_BASE_URL`을 맞춥니다.
- 백엔드에서 CORS(`origin`, `credentials`) 설정이 필요합니다.

## 주요 기능

- `useQuery`로 현재 로그인한 사용자를 조회해 `로그인 상태` 카드에 표시합니다.
- `useMutation`으로 회원가입·로그인·로그아웃을 처리하고 `setQueryData`로 결과를 캐시에 반영합니다.
- 폼 상태와 요청 처리를 `useSignUpForm`·`useLoginForm`·`useAuthPage` 훅으로 나눕니다.

## 주요 스크립트

```bash
pnpm dev     # 개발 서버
pnpm build   # 프로덕션 빌드
pnpm start   # 프로덕션 실행
pnpm lint    # ESLint
pnpm format  # Prettier 포맷
pnpm format:check # Prettier 포맷 검사
```
