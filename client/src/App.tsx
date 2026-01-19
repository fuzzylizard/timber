import "./App.css";
import Header from "@/components/Header.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import JobBoard from "@/components/JobBoard.tsx";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import type { User } from "./types";
import { userDataKey } from "./constants";
import AuthForm from "./components/AuthForm";

const queryClient = new QueryClient();

async function getUserData() {
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

function App() {
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // TODO this might not be the best way of doing this
  useEffect(() => {
    async function fetchUser() {
      setAuthChecked(false);
      try {
        const userData = await getUserData();
        setUser(userData);
        setLoggedIn(true);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
        setLoggedIn(false);
      } finally {
        setAuthChecked(true);
      }
    }

    fetchUser();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {!loggedIn && authChecked && (
        <AuthForm
          isSignIn={true}
          setUser={setUser}
          setLoggedIn={setLoggedIn}
          setAuthChecked={setAuthChecked}
        />
      )}
      {authChecked && loggedIn && (
        <>
          <Header />
          <JobBoard />
          <Footer />
        </>
      )}
      <ReactQueryDevtools />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
