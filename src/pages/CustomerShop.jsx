
import CustomerNavbar from "../components/CustomerNavbar";
import Footer from "../components/Footer";
import useProducts from "../hooks/useProducts";

function CustomerShop() {
  const { products, loading, error } = useProducts();

  return (
    <div className="min-h-screen bg-[#fffaf2]">
      <CustomerNavbar />

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-800 uppercase tracking-widest font-semibold mb-3">
              CoffeeOS Collection
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#382319]">
              Our Coffee Selection
            </h1>
            <p className="text-gray-600 mt-4">
              Discover coffee selected to make every moment special.
            </p>
          </div>

          {loading && <p className="text-center">Loading products...</p>}

          {error && (
            <p className="text-center text-red-600">{error}</p>
          )}

          {!loading && !error && products.length === 0 && (
            <p className="text-center text-gray-600">
              No products are available right now.
            </p>
          )}

          {!loading && !error && products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <img
                    src={product.image || "https://placehold.co/600x400?text=Coffee"}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">
                    <p className="text-amber-800 text-sm font-semibold">
                      {product.category}
                    </p>
                    <h2 className="text-xl font-bold text-[#382319] mt-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-500 mt-2">
                      Origin: {product.origin}
                    </p>
                    <p className="text-xl font-bold text-amber-900 mt-4">
                      ${Number(product.price).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer customer={true} />
    </div>
  );
}

export default CustomerShop;
