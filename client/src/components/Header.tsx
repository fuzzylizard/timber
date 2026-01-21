import type { User } from "@/types";
import { QueryClient } from "@tanstack/react-query";
import { CircleUser } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  setUser: (user: User | null) => void;
  setLoggedIn: (loggedIn: boolean) => void;
  setAuthChecked: (authChecked: boolean) => void;
}

const queryClient = new QueryClient();

export default function Header({
  setUser,
  setLoggedIn,
  setAuthChecked,
}: HeaderProps) {
  async function handleLogout() {
    await fetch("/api/session", {
      method: "DELETE",
      credentials: "include",
    }).then((response) => {
      if (response.ok) {
        queryClient.removeQueries();
        setUser(null);
        setLoggedIn(false);
        setAuthChecked(true);
      } else {
        console.error("Logout failed with status:", response.status);
      }
    });
  }

  return (
    <header className="bg-accent shadow-sm">
      <div className="mx-auto flex flex-column justify-between gap-5 px-5 py-2">
        <div className="text-left w-1/3">
          <h1 className="text-xl font-bold text-primary">
            Timber - Tracking your Job Hunt
          </h1>
        </div>
        <div className="flex flex-row w-1/3 text-muted-foreground justify-center gap-1">
          Job Search 2026
        </div>
        <div className="text-right w-1/3 m-0">
          <div className="border rounded-full inline-block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <CircleUser className="size-7 text-foreground/50 cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
