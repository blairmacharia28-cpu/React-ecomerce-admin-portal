
const benefits = [
  {
    icon: "☕",
    title: "Quality Coffee",
    description:
      "We celebrate carefully selected coffee with rich flavours and a wonderful aroma.",
  },
  {
    icon: "🌱",
    title: "Freshness First",
    description:
      "We value freshness and quality in every coffee experience.",
  },
  {
    icon: "❤️",
    title: "Made with Passion",
    description:
      "Coffee is more than a drink. It's a moment worth enjoying and sharing.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#fffaf2] px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-amber-800 uppercase tracking-[0.2em] font-semibold mb-3">
            The CoffeeOS Difference
          </p>

          <h2 className="text-4xl font-bold text-[#382319]">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-5xl mb-6">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-[#382319] mb-4">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
