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
      <h2>Our Coffee Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Origin: {product.origin}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Products;