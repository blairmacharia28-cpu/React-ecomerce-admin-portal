
import { Link } from "react-router-dom";

function Footer({ customer = false }) {
  if (!customer) {
    return (
      <footer className="bg-amber-950 text-white text-center p-4">
        <p>© 2026 CoffeeOS. All rights reserved.</p>
      </footer>
    );
  }

  return (
    <footer id="contact" className="bg-[#382319] text-white px-6 py-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Coffee<span className="text-amber-400">OS</span>
          </h2>
          <p className="text-amber-100 leading-relaxed">
            Every cup has a story. Discover rich flavours
            and coffee worth sharing.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-amber-100">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">Our Story</a></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
          <p className="text-amber-100">
            We'd love to hear from you.
          </p>
          <p className="text-amber-100 mt-3">
            Email: hello@coffeeos.com
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-amber-800 mt-12 pt-6 text-center text-amber-200 text-sm">
        © {new Date().getFullYear()} CoffeeOS. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
