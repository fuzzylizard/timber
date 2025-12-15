export default function Header() {
    return (
        <header className="sticky top-0 z-10 bg-card shadow-sm">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
                <h1 className="text-2xl font-bold text-primary">Timber Homepage</h1>
                <div className="">
                    Sign In | Sign Up
                </div>
            </div>
        </header>
    )
}