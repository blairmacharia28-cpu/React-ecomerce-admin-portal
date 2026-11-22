
import useProducts from "../hooks/useProducts";

function Products() {
  const { products, loading, error, searchTerm } = useProducts();

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.origin.toLowerCase().includes(search)
    );
  });

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-950 mb-6">
        Our Coffee Products
      </h2>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold text-amber-950">
                  {product.name}
                </h3>

                <p className="text-gray-600">
                  Category: {product.category}
                </p>

                <p className="text-gray-600">
                  Origin: {product.origin}
                </p>

                <p className="text-amber-900 font-bold mt-3">
                  ${product.price}
                </p>

                <p className="text-sm text-gray-500">
                  Stock: {product.stock} units
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
