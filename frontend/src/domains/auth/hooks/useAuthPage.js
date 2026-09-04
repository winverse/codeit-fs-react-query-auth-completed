import { useState } from "react";
import useAuthMutations from "@/domains/auth/hooks/use-auth-mutations";
import { AUTH_MODE } from "@/domains/auth/utils/constants";
import useSignUpForm from "@/domains/auth/hooks/use-sign-up-form";
import useLoginForm from "@/domains/auth/hooks/use-login-form";

export default function useAuthPage() {
  const [mode, setMode] = useState(AUTH_MODE.SIGN_UP);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const { signUpMutation, loginMutation, logoutMutation } = useAuthMutations();

  const {
    signUpForm,
    signUpErrors,
    handleSignUpInput,
    handleSignUpSubmit,
    resetSignUpFormState,
  } = useSignUpForm({
    signUpMutation,
    setFormError,
    setFormSuccess,
  });

  const {
    loginForm,
    loginErrors,
    handleLoginInput,
    handleLoginSubmit,
    resetLoginFormState,
  } = useLoginForm({
    loginMutation,
    setFormError,
    setFormSuccess,
  });

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    setFormError("");
    setFormSuccess("");
    resetSignUpFormState();
    resetLoginFormState();
  };

  const handleLogout = () => {
    setFormError("");
    setFormSuccess("");

    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        setFormSuccess("로그아웃 완료");
      },
      onError: (error) => {
        setFormError(
          error instanceof Error ? error.message : "요청이 실패했습니다.",
        );
      },
    });
  };

  return {
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
  };
}
