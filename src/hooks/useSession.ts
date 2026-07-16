"use client";

import authClient from "@/lib/auth-client";

export default function useUser() {
  const { data, isPending, error, refetch } = authClient.useSession();

  return {
    user: data?.user ?? null,
    session: data?.session ?? null,
    isLoading: isPending,
    error,
    refetch,
    isAuthenticated: !!data?.user,
  };
}
