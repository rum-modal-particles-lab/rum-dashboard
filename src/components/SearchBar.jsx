export default function SearchBar({ query, setQuery }) {
    return (
      <div className="mb-4">
        <input
          type="search"
          placeholder="Search the corpus..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
  