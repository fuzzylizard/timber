import { Columns3, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-accent shadow-sm">
      <div className="mx-auto flex flex-row justify-between gap-5 px-5 py-3">
        <div className="text-left w-1/3">
          <h1 className="text-2xl font-bold text-primary ">Timber Homepage</h1>
        </div>
        <div className="flex flex-row w-1/3 text-muted-foreground justify-center gap-1">
          <Columns3 className="hover:text-foreground" />
          <Settings />
        </div>
        <div className="text-right w-1/3">Sign In | Sign Up</div>
      </div>
    </header>
  );
}
