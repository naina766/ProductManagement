import { useState, useMemo } from "react";

export default function ProductForm({ product, onSave, onCancel }) {
  const initialForm = useMemo(() => {
    return product?.id
      ? { ...product }
      : { name: "", price: "", category: "", stock: "", description: "", image: "" };
  }, [product]);

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  if (product?.id && form.id !== product.id) {
    setForm({ ...product });
  }

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.price || form.price <= 0) errs.price = "Price must be greater than 0";
    if (!form.category) errs.category = "Category is required";
    return errs;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setForm({ ...form, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <label className="font-semibold">Name</label>
        <input
          className="border p-2 w-full rounded"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label className="font-semibold">Price</label>
        <input
          type="number"
          className="border p-2 w-full rounded"
          value={form.price}
          onChange={e => setForm({ ...form, price: Number(e.target.value) })}
        />
        {errors.price && <p className="text-red-500">{errors.price}</p>}
      </div>

      <div>
        <label className="font-semibold">Category</label>
        <input
          className="border p-2 w-full rounded"
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        />
        {errors.category && <p className="text-red-500">{errors.category}</p>}
      </div>

      <div>
        <label className="font-semibold">Stock</label>
        <input
          type="number"
          className="border p-2 w-full rounded"
          value={form.stock}
          onChange={e => setForm({ ...form, stock: Number(e.target.value) })}
        />
      </div>

      <div>
        <label className="font-semibold">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 w-full rounded"
        />
        {form.image && (
          <img src={form.image} alt="preview" className="mt-2 w-32 h-32 object-cover rounded" />
        )}
      </div>

      <div>
        <label className="font-semibold">Description</label>
        <textarea
          className="border p-2 w-full rounded"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
      </div>

      <div className="flex justify-between gap-2 mt-2">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Save
        </button>
      </div>
    </form>
  );
}
