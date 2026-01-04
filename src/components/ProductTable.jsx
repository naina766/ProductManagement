export default function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto border rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {products.map(product => (
            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2">
                <img src={product.image} alt={product.name} className="w-20 h-16 object-cover rounded" />
              </td>
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.category}</td>
              <td className="px-4 py-2">${product.price}</td>
              <td className="px-4 py-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${product.stock > 0 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                  {product.stock > 0 ? product.stock : "Out of Stock"}
                </span>
              </td>
              <td className="px-4 py-2 flex gap-2">
                <button
                  onClick={() => onEdit(product)}
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(product.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
