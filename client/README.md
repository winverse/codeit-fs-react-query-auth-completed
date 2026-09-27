# React Query Auth Client

Next.js(App Router) + React Query 기반 인증 프론트엔드입니다.

## 사전 요구 사항

- Node.js
- `pnpm`
- 서버 실행 중 (`http://localhost:5001`)

## 실행 방법

설치와 실행은 저장소 루트 `README.md`의 순서를 따릅니다. 개발 서버는 저장소 루트에서 다음 명령으로 실행합니다.

```bash
pnpm --dir client dev
```

- 기본 URL: `http://localhost:3000`

## 서버 연결

브라우저에서 서버를 직접 호출합니다. 기본 주소는 `http://localhost:5001`이며, 요청 함수(`src/lib/api/request.js`)가 주소 뒤에 `/api` 경로를 붙입니다.

## 주요 기능

- `useQuery`로 현재 로그인한 사용자를 조회해 `로그인 상태` 카드에 표시합니다.
- `useMutation`으로 회원가입·로그인·로그아웃을 처리하고 `setQueryData`로 결과를 캐시에 반영합니다.
- 폼 상태와 요청 처리를 `useSignUpForm`·`useLoginForm`·`useAuthPage` 훅으로 나눕니다.
