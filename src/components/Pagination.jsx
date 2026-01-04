export default function Pagination({ total, currentPage, pageSize, onPageChange }) {
  const pages = Math.ceil(total / pageSize);
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      {[...Array(pages)].map((_, i) => (
        <button
          key={i}
          className={`px-3 py-1 rounded ${i + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
