import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      className="border p-2 rounded w-full md:w-64"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  );
}
