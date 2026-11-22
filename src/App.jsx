

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

import "./App.css";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/:id/edit" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
