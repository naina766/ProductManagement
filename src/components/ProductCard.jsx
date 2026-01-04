export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-white flex flex-col overflow-hidden">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded ${product.stock > 0 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold mb-1">{product.name}</h2>
        <p className="text-gray-600 mb-1">{product.category}</p>
        <p className="text-green-600 font-semibold mb-2">${product.price}</p>
        <p className="text-gray-500 text-sm flex-grow">{product.description}</p>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => onEdit(product)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors flex-1"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors flex-1"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
