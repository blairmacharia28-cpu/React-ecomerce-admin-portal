import { useState, useEffect } from "react";
import { ProductContext } from "./ProductContextValue";

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Load all products when app starts
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // 1. ADD PRODUCT - POST
  async function addProduct(newProduct) {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const savedProduct = await response.json();
      // Add new product to list without refreshing
      setProducts((prev) => [...prev, savedProduct]);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  }

  // 2. EDIT PRODUCT - PATCH
  async function updateProduct(id, updatedProduct) {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const savedProduct = await response.json();
      // Update the product in the list
      setProducts((prev) =>
        prev.map((product) =>
          product.id === id ? savedProduct : product
        )
      );
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  }

  // 3. DELETE PRODUCT - DELETE
  async function deleteProduct(id) {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      // Remove from list without refreshing
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}