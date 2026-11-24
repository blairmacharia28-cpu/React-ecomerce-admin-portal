
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="bg-[#fffaf2] px-6 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left side */}
        <div>
          <p className="text-amber-800 font-semibold tracking-[0.2em] uppercase mb-5">
            Welcome to CoffeeOS
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-[#382319] leading-tight mb-6">
            Every Cup Has a
            <span className="text-amber-700"> Story.</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
            Discover exceptional coffee, carefully selected
            and crafted to bring warmth, richness and happiness
            to every moment.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="bg-amber-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition"
            >
              Explore Our Coffee
            </Link>

            <a
              href="#about"
              className="border border-amber-900 text-amber-900 px-8 py-4 rounded-full font-semibold hover:bg-amber-100 transition"
            >
              Our Story
            </a>
          </div>

          <div className="flex gap-10 mt-12">
            <div>
              <h3 className="text-2xl font-bold text-[#382319]">100%</h3>
              <p className="text-gray-500 text-sm">Coffee Love</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#382319]">Fresh</h3>
              <p className="text-gray-500 text-sm">Quality Beans</p>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-amber-200 rounded-[2rem] rotate-3"></div>

          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
            alt="Freshly brewed coffee"
            className="relative w-full h-[420px] md:h-[550px] object-cover rounded-[2rem] shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
