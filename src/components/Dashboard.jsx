import useProducts from "../hooks/useProducts";

function Dashboard() {
  const { products, loading, error } = useProducts();

  const totalProducts = products.length;

  const totalStock = products.reduce(
    (total, product) => total + product.stock,
    0
  );

  const lowStockProducts = products.filter(
    (product) => product.stock < 10
  ).length;

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="flex-1 bg-amber-50 p-8">
      <h1 className="text-3xl font-bold text-amber-950 mb-2">
        Welcome to CoffeeOS
      </h1>

      <p className="text-gray-600 mb-8">
        Here's an overview of your coffee store.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Total Products</h2>
          <p className="text-3xl font-bold text-amber-900">
            {totalProducts}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Total Stock</h2>
          <p className="text-3xl font-bold text-amber-900">
            {totalStock}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Low Stock Products</h2>
          <p className="text-3xl font-bold text-red-600">
            {lowStockProducts}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;