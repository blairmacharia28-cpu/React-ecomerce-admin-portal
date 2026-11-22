
import SearchBar from "../components/searchBar";
import ProductsList from "../components/Products";

function Products() {
  return (
    <div className="bg-amber-50 p-8">
      <h1 className="text-3xl font-bold text-amber-950 mb-6">
        Manage Coffee Products
      </h1>

      <SearchBar />

      <ProductsList />
    </div>
  );
}

export default Products;
