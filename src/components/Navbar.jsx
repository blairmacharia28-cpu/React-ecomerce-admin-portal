function Navbar() {
  return (
    <header className="bg-amber-900 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">
      CoffeeOS
      </h1>

      <div className="flex items-center gap-4">
        <span>Admin Dashboard</span>

        <div className="w-10 h-10 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
}

export default Navbar;