# React Query Auth Completed

이 프로젝트는 회원가입·로그인 화면에 React Query를 적용하는 수업의 완성 코드입니다. 시작 코드(`codeit-fs-react-query-auth-starter`)에서 수업을 끝까지 따라 한 결과와 같으며, 완성된 결과를 확인하기 위한 참고 자료입니다.

## 폴더 구성

- `client/`: Next.js와 React Query로 만든 인증 화면입니다.
- `server/`: Express와 Prisma로 만든 인증 API 서버입니다. 회원가입·로그인·로그아웃·현재 사용자 조회 API를 제공합니다.

## 완성된 기능

- 현재 로그인한 사용자를 서버에서 조회해 `로그인 상태` 카드에 표시합니다.
- 회원가입·로그인·로그아웃을 mutation으로 처리하고 결과를 캐시에 반영해 새로고침 없이 화면을 바꿉니다.
- 폼 상태와 요청 처리를 역할별 훅으로 나눕니다.

수업에서 만들거나 수정한 파일은 다음과 같습니다.

| 파일                                                        | 역할                                                                                     |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `client/src/lib/query-keys.js`                              | 쿼리 키를 한곳에서 관리합니다.                                                           |
| `client/src/lib/api/auth.js`, `client/src/lib/api/index.js` | 현재 로그인한 사용자를 조회하는 `getMe`를 추가하고 내보냅니다.                           |
| `client/src/features/auth/components/AuthPage/AuthPage.jsx` | 로그인 상태를 조회해 카드 문구와 화면을 바꿉니다.                                        |
| `client/src/features/auth/hooks/use-auth-mutations.js`      | 회원가입·로그인·로그아웃 mutation과 캐시 반영을 담당합니다.                              |
| `client/src/features/auth/hooks/use-sign-up-form.js`        | 회원가입 폼의 입력값·검증·제출을 담당합니다.                                             |
| `client/src/features/auth/hooks/use-login-form.js`          | 로그인 폼의 입력값·검증·제출을 담당합니다.                                               |
| `client/src/features/auth/hooks/use-auth-page.js`           | 모드 전환·메시지·로그아웃을 처리하고 mutation과 두 폼 훅을 묶어 `AuthPage`에 전달합니다. |

## 시작하기

### 1. 코드 받기와 의존성 설치

저장소 루트에서 두 폴더의 의존성을 각각 설치합니다.

```bash
git clone https://github.com/winverse/codeit-fs-react-query-auth-completed.git
cd codeit-fs-react-query-auth-completed

pnpm --dir client install
pnpm --dir server install
```

### 2. 서버 환경 변수 파일 준비

예시 파일을 복사해 서버의 개발용 환경 변수 파일을 만듭니다.

```bash
cp server/env/.env.example server/env/.env.development
```

`server/env/.env.development`를 열어 다음 값을 확인하고 채웁니다.

| 변수                 | 값                                                           |
| -------------------- | ------------------------------------------------------------ |
| `NODE_ENV`           | `development`(예시 파일 값 그대로)                           |
| `PORT`               | `5001`(예시 파일 값 그대로)                                  |
| `CORS_ORIGIN`        | `http://localhost:3000`(예시 파일 값 그대로)                 |
| `DATABASE_URL`       | `postgresql://postgres:<비밀번호>@localhost:5432/react-auth` |
| `JWT_ACCESS_SECRET`  | 32자 이상의 임의 문자열                                      |
| `JWT_REFRESH_SECRET` | 32자 이상의 임의 문자열                                      |

`DATABASE_URL`의 `<비밀번호>`는 PostgreSQL을 설치할 때 정한 `postgres` 사용자의 비밀번호로 바꿉니다. 비밀번호 없이 접속하는 환경이면 `:<비밀번호>`를 지워 `postgresql://postgres@localhost:5432/react-auth`로 씁니다.

프론트엔드는 환경 변수 파일 없이도 `http://localhost:5001`의 서버로 요청하므로 `client`에는 환경 변수 파일을 만들지 않아도 됩니다.

### 3. PostgreSQL 데이터베이스 만들기

로컬 PostgreSQL에 `react-auth` 데이터베이스를 만듭니다.

- macOS/Linux (zsh, bash)

```bash
psql -U postgres -d postgres -c 'CREATE DATABASE "react-auth";'
```

- Windows (`SQL Shell (psql)`)

1. 시작 메뉴에서 `psql`을 검색해 `SQL Shell (psql)`을 실행합니다.
2. 프롬프트가 나오면 아래처럼 입력합니다.

```text
Server [localhost]:
Database [postgres]:
Port [5432]:
Username [postgres]:
Password for user postgres:
```

`Server`, `Database`, `Port`, `Username`은 기본값이면 `Enter`만 눌러도 됩니다.
로그인 후 아래 SQL을 실행합니다.

```sql
CREATE DATABASE "react-auth";
\q
```

### 4. 데이터베이스 테이블 만들기

저장소 루트에서 Prisma Client를 생성하고 데이터베이스에 테이블을 만듭니다.

```bash
pnpm --dir server prisma:generate
pnpm --dir server prisma:migrate
```

`Your database is now in sync with your schema.`가 보이면 데이터베이스 준비가 끝난 것입니다.

### 5. 개발 서버 실행

터미널 두 개를 열어 저장소 루트에서 `server`와 `client`의 개발 서버를 각각 실행합니다.

```bash
# 터미널 1
pnpm --dir server dev

# 터미널 2
pnpm --dir client dev
```

터미널 1에 `[development] Server running at http://localhost:5001`이 보이면 서버가 실행된 것입니다.

### 6. 화면 확인

브라우저에서 `http://localhost:3000`에 접속하면 `로그인 상태` 카드에 `비로그인`이 표시되고 회원가입·로그인 폼이 보입니다.

회원가입하거나 로그인하면 새로고침하지 않아도 카드가 `<이메일> 로그인됨`으로 바뀌고 폼 자리에 로그아웃 버튼이 나타납니다. 로그아웃하면 카드가 다시 `비로그인`으로 바뀝니다.
