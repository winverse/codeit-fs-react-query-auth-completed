import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, logout, signUp } from "@/lib/api";
import { queryKeys } from "@/lib/query-keys";

export default function useAuthMutations() {
  const queryClient = useQueryClient();

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: (createdUser) => {
      queryClient.setQueryData(queryKeys.auth.me(), createdUser);
    },
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (loggedInUser) => {
      queryClient.setQueryData(queryKeys.auth.me(), loggedInUser);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(queryKeys.auth.me(), null);
    },
  });

  return { signUpMutation, loginMutation, logoutMutation };
}
