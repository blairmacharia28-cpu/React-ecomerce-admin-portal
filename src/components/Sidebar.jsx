

import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  const linkStyle = ({ isActive }) =>
    `block rounded-lg px-3 py-2 hover:bg-amber-800 hover:text-amber-200 ${
      isActive ? "bg-amber-800 text-amber-200 font-bold" : ""
    }`;

  return (
    <aside
      className={`bg-amber-950 text-white w-64 p-6 shrink-0
        fixed inset-y-0 left-0 z-40 transform transition-transform duration-300
        md:static md:translate-x-0 md:min-h-screen
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-bold">Menu</h2>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="md:hidden text-xl"
        >
          ✕
        </button>
      </div>

      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink to="/" end className={linkStyle} onClick={onClose}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" end className={linkStyle} onClick={onClose}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/products/add" className={linkStyle} onClick={onClose}>
              Add Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
