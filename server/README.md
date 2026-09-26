# React Query Auth Server

Express + Prisma 기반 인증 API 서버입니다.

## 사전 요구 사항

- Node.js
- `pnpm`
- PostgreSQL

## 실행 방법

설치, 환경 변수 파일 준비, 데이터베이스 생성과 개발 서버 실행은 저장소 루트 `README.md`의 순서를 따릅니다. 환경 변수 파일은 `env/.env.development`이며 채울 값과 조건도 루트 `README.md`에 있습니다.

- 기본 주소: `http://localhost:5001`

## 주요 스크립트

```bash
pnpm dev             # 개발 서버 실행 (.env.development)
pnpm prisma:generate # Prisma Client 생성
pnpm prisma:migrate  # 개발 마이그레이션
pnpm prisma:studio   # Prisma Studio 실행
pnpm seed            # 시드 데이터 입력
pnpm lint            # ESLint
pnpm format          # Prettier 포맷
pnpm format:check    # Prettier 포맷 검사
```
