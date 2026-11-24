
import { Link } from "react-router-dom";

function CustomerNavbar() {
  return (
    <header className="bg-[#fffaf2] text-[#382319] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Coffee<span className="text-amber-700">OS</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home" className="hover:text-amber-700">Home</a>
          <a href="#shop" className="hover:text-amber-700">Shop</a>
          <a href="#about" className="hover:text-amber-700">Our Story</a>
          <a href="#contact" className="hover:text-amber-700">Contact</a>
        </div>

        <a
          href="#shop"
          className="bg-amber-900 text-white px-5 py-3 rounded-full font-semibold hover:bg-amber-800 transition"
        >
          Shop Now
        </a>
      </nav>
    </header>
  );
}

export default CustomerNavbar;
