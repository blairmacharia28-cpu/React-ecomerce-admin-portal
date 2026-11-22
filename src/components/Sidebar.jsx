function Sidebar() {
  return (
    <aside className="bg-amber-950 text-white w-64 min-h-screen p-6">
      <h2 className="text-lg font-bold mb-8">
        Menu
      </h2>

      <nav>
        <ul className="space-y-4">
          <li>
            <a href="/" className="block hover:text-amber-300">
              Dashboard
            </a>
          </li>

          <li>
            <a href="/products" className="block hover:text-amber-300">
              Products
            </a>
          </li>

          <li>
            <a href="/products/add" className="block hover:text-amber-300">
              Add Product
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;