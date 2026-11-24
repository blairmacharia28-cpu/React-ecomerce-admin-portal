

import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function Dashboard() {
  const { products, loading, error } = useProducts();

  const totalProducts = products.length;

  const totalStock = products.reduce(
    (total, product) => total + Number(product.stock || 0),
    0
  );

  const lowStockProducts = products.filter(
    (product) => Number(product.stock) < 10
  );

  if (loading) return <p className="p-8">Loading dashboard...</p>;
  if (error) return <p className="p-8 text-red-600">{error}</p>;

  return (
    <div className="min-h-screen bg-[#fffaf2] p-5 md:p-8">

      {/* Welcome banner */}
      <section className="relative overflow-hidden rounded-3xl bg-[#382319] text-white mb-10">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-8 md:p-12">
            <p className="text-amber-300 uppercase tracking-widest font-semibold mb-4">
              CoffeeOS Administration
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              Welcome Back!
              <span className="block text-amber-300">
                Let's Brew Success.
              </span>
            </h1>

            <p className="text-amber-100 leading-relaxed mb-8">
              Manage your coffee collection, keep track of your
              inventory and make every cup count.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/admin/products/add"
                className="bg-amber-300 text-[#382319] px-6 py-3 rounded-full font-bold hover:bg-amber-200 transition"
              >
                + Add Product
              </Link>

              <Link
                to="/admin/products"
                className="border border-amber-200 px-6 py-3 rounded-full font-semibold hover:bg-amber-900 transition"
              >
                Manage Products
              </Link>
            </div>
          </div>

          <div className="h-64 md:h-full min-h-64">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
              alt="Freshly brewed coffee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mb-12">
        <div className="mb-6">
          <p className="text-amber-800 uppercase tracking-widest text-sm font-semibold">
            At a glance
          </p>
          <h2 className="text-3xl font-bold text-[#382319]">
            Store Overview
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-amber-100">
            <span className="text-3xl">☕</span>
            <p className="text-gray-500 mt-4">Total Products</p>
            <h3 className="text-4xl font-bold text-amber-950 mt-2">
              {totalProducts}
            </h3>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-amber-100">
            <span className="text-3xl">📦</span>
            <p className="text-gray-500 mt-4">Total Stock</p>
            <h3 className="text-4xl font-bold text-amber-950 mt-2">
              {totalStock}
            </h3>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-sm border border-amber-100">
            <span className="text-3xl">⚠️</span>
            <p className="text-gray-500 mt-4">Low Stock Products</p>
            <h3 className="text-4xl font-bold text-red-600 mt-2">
              {lowStockProducts.length}
            </h3>
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="mb-12">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div>
            <p className="text-amber-800 uppercase tracking-widest text-sm font-semibold">
              Featured collection
            </p>
            <h2 className="text-3xl font-bold text-[#382319]">
              Your Coffee Products
            </h2>
          </div>

          <Link
            to="/admin/products"
            className="text-amber-900 font-bold hover:underline"
          >
            View All Products →
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl text-center">
            <p className="text-gray-600 mb-4">
              No products have been added yet.
            </p>
            <Link
              to="/admin/products/add"
              className="text-amber-900 font-bold hover:underline"
            >
              Add your first product
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={product.image || "https://placehold.co/600x400?text=Coffee"}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  <p className="text-sm text-amber-800 font-semibold">
                    {product.category}
                  </p>

                  <h3 className="text-xl font-bold text-[#382319] mt-2">
                    {product.name}
                  </h3>

                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-amber-900">
                      ${Number(product.price).toFixed(2)}
                    </span>

                    <span className="text-sm text-gray-500">
                      Stock: {product.stock}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Low stock warning */}
      {lowStockProducts.length > 0 && (
        <section className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-red-800 mb-3">
            Low Stock Alert
          </h2>

          <p className="text-red-700 mb-4">
            The following products have fewer than 10 items remaining:
          </p>

          <ul className="space-y-2">
            {lowStockProducts.map((product) => (
              <li key={product.id} className="text-red-800">
                {product.name} — {product.stock} remaining
              </li>
            ))}
          </ul>
        </section>
      )}

    </div>
  );
}

export default Dashboard;
