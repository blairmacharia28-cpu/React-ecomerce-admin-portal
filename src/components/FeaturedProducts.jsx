
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function FeaturedProducts() {
  const { products, loading, error } = useProducts();

  const featuredProducts = products.slice(0, 3);

  return (
    <section id="shop" className="bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-amber-800 uppercase tracking-[0.2em] font-semibold mb-3">
            Our Collection
          </p>

          <h2 className="text-4xl font-bold text-[#382319] mb-4">
            Explore Our Coffee
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            Carefully selected coffee to make every moment special.
          </p>
        </div>

        {loading && <p className="text-center">Loading coffee...</p>}

        {error && (
          <p className="text-center text-red-600">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#fffaf2] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
                <img
                  src={product.image || "https://placehold.co/600x400?text=Coffee"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <p className="text-amber-800 text-sm font-semibold mb-2">
                    {product.category}
                  </p>

                  <h3 className="text-xl font-bold text-[#382319] mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 mb-4">
                    Origin: {product.origin}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-900">
                      ${Number(product.price).toFixed(2)}
                    </span>

                    <Link
                      to="/products"
                      className="text-amber-900 font-semibold hover:text-amber-700"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-amber-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-800 transition"
          >
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;
