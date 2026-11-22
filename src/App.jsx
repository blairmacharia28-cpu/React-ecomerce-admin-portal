
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import SearchBar from "./components/searchBar";
import Products from "./components/Products";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <Dashboard />

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-amber-950 mb-4">
              Manage Coffee Products
            </h2>

            <SearchBar />
            <Products />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
