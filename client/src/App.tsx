import Header from "@/components/Header.tsx";
import JobBoard from "@/components/JobBoard.tsx";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";
import "./App.css";
import AuthForm from "./components/AuthForm";
import Footer from "./components/Footer";
import { getUserData } from "./lib/auth.ts";
import type { User } from "./types";

function App() {
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const queryClient = new QueryClient();

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
          <Header
            setUser={setUser}
            setLoggedIn={setLoggedIn}
            setAuthChecked={setAuthChecked}
          />
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
