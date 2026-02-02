import { userDataKey } from "@/constants";
import type { User } from "@/types";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export async function getUserData() {
  const data = await queryClient.fetchQuery<User>({
    queryKey: [userDataKey],
    queryFn: async () => {
      const response = await fetch("/api/session", {
        credentials: "include",
      });
      return await response.json();
    },
  });

  return data;
}

export async function signInQuery(user: User) {
  return await queryClient.fetchQuery<User>({
    queryKey: ["userData"],
    queryFn: async () => {
      const response = await fetch("/api/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: user.email_address,
          password: user.password,
        }),
        credentials: "include",
      });
      return await response.json();
    },
  });
}
