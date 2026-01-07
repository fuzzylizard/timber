import { CircleUser } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-accent shadow-sm">
      <div className="mx-auto flex flex-row justify-between gap-5 px-5 py-2">
        <div className="text-left w-1/3">
          <h1 className="text-xl font-bold text-primary ">Timber Homepage</h1>
        </div>
        <div className="flex flex-row w-1/3 text-muted-foreground justify-center gap-1">
          Job Search 2026
        </div>
        <div className="text-right w-1/3 m-0">
          <div className="border rounded-full inline-block">
            <CircleUser className="size-7 text-foreground/50" />
          </div>
        </div>
      </div>
    </header>
  );
}
