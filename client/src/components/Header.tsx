export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-accent shadow-sm">
      <div className="mx-auto flex flex-row justify-between gap-5 px-5 py-3">
        <div className="text-left w-1/2">
          <h1 className="text-2xl font-bold text-primary ">Timber Homepage</h1>
        </div>
        <div className="text-right w-1/2">Sign In | Sign Up</div>
      </div>
    </header>
  );
}
