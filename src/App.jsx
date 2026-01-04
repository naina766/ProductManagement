import { useState, useCallback } from "react";
import { initialProducts } from "./components/initialProducts";
import ProductCard from "./components/ProductCard";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";
import Modal from "./components/Modal";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [view, setView] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleSave = (product) => {
    if (product.id) {
      setProducts(products.map(p => (p.id === product.id ? product : p)));
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Product Management Dashboard
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <SearchBar onSearch={handleSearch} />

        <div className="flex gap-2">
          <button
            onClick={() => setView(view === "grid" ? "list" : "grid")}
            className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition-colors"
          >
            {view === "grid" ? "List View" : "Grid View"}
          </button>

          <button
            onClick={() => setEditingProduct({})}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
          >
            Add Product
          </button>
        </div>
      </div>

      <Modal isOpen={!!editingProduct} onClose={() => setEditingProduct(null)}>
        <ProductForm
          product={editingProduct}
          onSave={handleSave}
          onCancel={() => setEditingProduct(null)}
        />
      </Modal>

      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={setEditingProduct}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <ProductTable
          products={paginatedProducts}
          onEdit={setEditingProduct}
          onDelete={handleDelete}
        />
      )}

      <Pagination
        total={filteredProducts.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
