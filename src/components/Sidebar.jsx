
import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkStyle = ({ isActive }) =>
    `block rounded-lg px-3 py-2 hover:bg-amber-800 hover:text-amber-200 ${
      isActive ? "bg-amber-800 text-amber-200 font-bold" : ""
    }`;

  return (
    <aside className="bg-amber-950 text-white w-64 min-h-screen p-6">
      <h2 className="text-lg font-bold mb-8">
        Menu
      </h2>

      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink to="/" end className={linkStyle}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" end className={linkStyle}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/products/add" className={linkStyle}>
              Add Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
