"use client";

import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/lib/api";
import { queryKeys } from "@/lib/query-keys";
import { Button } from "@/components/Button";
import * as styles from "./AuthPage.css.js";
import { AuthHero } from "@/features/auth/components/AuthHero";
import { AuthModeSwitch } from "@/features/auth/components/AuthModeSwitch";
import { LoginForm } from "@/features/auth/components/LoginForm";
import { SignUpForm } from "@/features/auth/components/SignUpForm";
import useAuthPage from "@/features/auth/hooks/use-auth-page";
import { AUTH_MODE } from "@/features/auth/utils/constants";

export default function AuthPage() {
  const {
    mode,
    formError,
    formSuccess,
    signUpForm,
    loginForm,
    signUpErrors,
    loginErrors,
    signUpMutation,
    loginMutation,
    logoutMutation,
    handleModeChange,
    handleLogout,
    handleSignUpInput,
    handleLoginInput,
    handleSignUpSubmit,
    handleLoginSubmit,
  } = useAuthPage();

  const meQuery = useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: getMe,
  });

  const isAuthenticated = meQuery.isSuccess && meQuery.data !== null;
  const shouldShowAuthModeSwitch = meQuery.isSuccess && !isAuthenticated;

  const authStatusText = meQuery.isPending
    ? "로그인 상태 확인 중"
    : meQuery.isError
      ? "로그인 상태 확인 실패"
      : isAuthenticated
        ? `${meQuery.data.email} 로그인됨`
        : "비로그인";

  const authFormContentByMode = {
    [AUTH_MODE.SIGN_UP]: (
      <SignUpForm
        form={signUpForm}
        errors={signUpErrors}
        onInput={handleSignUpInput}
        onSubmit={handleSignUpSubmit}
        isPending={signUpMutation.isPending}
      />
    ),
    [AUTH_MODE.LOGIN]: (
      <LoginForm
        form={loginForm}
        errors={loginErrors}
        onInput={handleLoginInput}
        onSubmit={handleLoginSubmit}
        isPending={loginMutation.isPending}
      />
    ),
  };

  let authContent =
    authFormContentByMode[mode] ?? authFormContentByMode[AUTH_MODE.LOGIN];

  if (meQuery.isPending) {
    authContent = (
      <p className={styles.authInfoText}>로그인 상태를 확인하는 중입니다.</p>
    );
  } else if (meQuery.isError) {
    authContent = (
      <p className={styles.formError}>
        로그인 상태를 확인하지 못했습니다. 잠시 후 다시 시도해 주세요.
      </p>
    );
  } else if (isAuthenticated) {
    authContent = (
      <div className={styles.authInfoBox}>
        <p className={styles.authInfoText}>
          현재 <strong>{meQuery.data.email}</strong>로 로그인되어 있습니다.
        </p>
        <Button
          type="button"
          variant="ghost"
          disabled={logoutMutation.isPending}
          onClick={handleLogout}
        >
          {logoutMutation.isPending ? "처리 중..." : "로그아웃"}
        </Button>
      </div>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.backdropCircleOne} />
      <div className={styles.backdropCircleTwo} />

      <AuthHero
        authStatusText={authStatusText}
        isAuthError={meQuery.isError}
        isAuthenticated={isAuthenticated}
      />

      <section className={styles.panel}>
        {shouldShowAuthModeSwitch ? (
          <AuthModeSwitch mode={mode} onChange={handleModeChange} />
        ) : null}

        {formError ? (
          <p className={styles.formError}>{formError}</p>
        ) : formSuccess ? (
          <p className={styles.formSuccess}>{formSuccess}</p>
        ) : null}

        {authContent}
      </section>
    </main>
  );
}
