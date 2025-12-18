export default function Footer() {
  return (
    <footer className="bg-accent shadow-inner">
      <div className="mx-auto flex flex-row justify-center gap-5 px-5 py-3">
        <div className="text-center">
          <p className="text-primary ">
            &copy; {new Date().getFullYear()} Timber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
