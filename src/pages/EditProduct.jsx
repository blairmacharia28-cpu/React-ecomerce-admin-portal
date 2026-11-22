
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, loading, updateProduct } = useProducts();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    origin: "",
    price: "",
    stock: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notFound, setNotFound] = useState(false);

  // Pre-fill form when products load
  useEffect(() => {
    if (loading) return;

    const product = products.find((p) => String(p.id) === String(id));
    if (!product) {
      setNotFound(true);
      return;
    }

    setFormData({
      name: product.name || "",
      category: product.category || "",
      origin: product.origin || "",
      price: String(product.price ?? ""),
      stock: String(product.stock ?? ""),
      image: product.image || "",
    });
  }, [products, loading, id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.origin.trim()) newErrors.origin = "Origin is required";

    if (!formData.price) newErrors.price = "Price is required";
    else if (Number(formData.price) <= 0) newErrors.price = "Price must be > 0";

    if (formData.stock === "") newErrors.stock = "Stock is required";
    else if (Number(formData.stock) < 0) newErrors.stock = "Stock cannot be negative";
    else if (!Number.isInteger(Number(formData.stock))) newErrors.stock = "Stock must be a whole number";

    if (!formData.image.trim()) newErrors.image = "Image URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await updateProduct(id, {
        name: formData.name.trim(),
        category: formData.category.trim(),
        origin: formData.origin.trim(),
        price: Number(formData.price),
        stock: Number(formData.stock),
        image: formData.image.trim(),
      });
      ("/products");
    } catch (err) {
      alert("Failed to update product. Try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (loading) return <p className="p-8">Loading product...</p>;
  if (notFound) return <p className="p-8">Product not found. <button onClick={() => ("/products")} className="text-amber-800 underline">Go back</button></p>;

  const inputClass = "w-full border rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-amber-600";
  const errorClass = "text-red-600 text-sm mt-1";

  return (
    <div className="bg-amber-50 p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-amber-950 mb-2">Edit Product</h1>
      <p className="text-gray-600 mb-6">Update the details of an existing coffee product.</p>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-2xl space-y-4">
        <div>
          <label className="block font-medium mb-1">Name *</label>
          <input name="name" value={formData.name} onChange={handleChange} className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Category *</label>
            <input name="category" value={formData.category} onChange={handleChange} className={inputClass} />
            {errors.category && <p className={errorClass}>{errors.category}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Origin *</label>
            <input name="origin" value={formData.origin} onChange={handleChange} className={inputClass} />
            {errors.origin && <p className={errorClass}>{errors.origin}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Price ($) *</label>
            <input type="number" step="0.01" min="0" name="price" value={formData.price} onChange={handleChange} className={inputClass} />
            {errors.price && <p className={errorClass}>{errors.price}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Stock *</label>
            <input type="number" min="0" step="1" name="stock" value={formData.stock} onChange={handleChange} className={inputClass} />
            {errors.stock && <p className={errorClass}>{errors.stock}</p>}
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Image URL *</label>
          <input name="image" value={formData.image} onChange={handleChange} className={inputClass} />
          {errors.image && <p className={errorClass}>{errors.image}</p>}
          {formData.image && (
            <img src={formData.image} alt="Preview" className="mt-3 h-40 w-full object-cover rounded-lg" onError={(e) => (e.target.style.display = "none")} />
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <button type="submit" disabled={isSubmitting} className="flex-1 bg-amber-800 text-white py-2.5 rounded-lg hover:bg-amber-900 disabled:opacity-50">
            {isSubmitting ? "Updating..." : "Save Changes"}
          </button>
          <button type="button" onClick={() => ("/products")} className="flex-1 bg-gray-200 py-2.5 rounded-lg hover:bg-gray-300">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
