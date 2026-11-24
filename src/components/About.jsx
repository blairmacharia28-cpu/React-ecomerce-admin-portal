
function About() {
  return (
    <section id="about" className="bg-[#f5eadb] px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
            alt="Coffee being prepared"
            className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-amber-800 uppercase tracking-[0.2em] font-semibold mb-4">
            A Little About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#382319] leading-tight mb-6">
            More Than Coffee.
            <span className="text-amber-700"> It's an Experience.</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            At CoffeeOS, we believe that great coffee brings people
            together. Every cup is an opportunity to slow down,
            connect and enjoy life's little moments.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            We celebrate carefully selected coffee, rich flavours
            and the simple joy of sharing something special.
            Our goal is to make every coffee experience memorable.
          </p>

          <a
            href="#shop"
            className="inline-block bg-amber-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition"
          >
            Discover Our Collection
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
