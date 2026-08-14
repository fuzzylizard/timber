import Board from "./components/Board.js";

export default function App() {
  return (
    <>
      <header className="">
        <div className="flex justify-between align-middle py-2 px-4">
          <div className="flex-col">Timber</div>
          <div className="flex-col">
            <span className="flex-col">Job Board 2026</span>
            <input
              type="text"
              placeholder="Search jobs..."
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-col text-right">Logout | Profile</div>
        </div>
      </header>
      <div>
        <Board />
      </div>
    </>
  );
}
