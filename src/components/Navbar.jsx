
function Navbar({ onMenuClick }) {
  return (
    <header className="bg-amber-900 text-white px-4 md:px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Toggle navigation menu"
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        <h1 className="text-xl font-bold">
          CoffeeOS
        </h1>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <span className="hidden sm:inline">Admin Dashboard</span>

        <div className="w-10 h-10 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
}

export default Navbar;
