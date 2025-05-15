export default function KWIC({ corpus, query }) {
  if (!query.trim()) {
    return <p className="text-gray-400">Enter a keyword to search the corpus.</p>;
  }

  const results = corpus.filter((entry) =>
    entry.excerpt && entry.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length === 0) {
    return <p className="text-gray-400">No matches found for “{query}”.</p>;
  }

  const highlightSearchTerm = (text, query) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span style="background-color:  #FF5733; color: white; font-weight: bold;">$1</span>');
  };

  const cleanLeftCollocation = (collocation) => {
    return collocation.replace(/,$/, "");
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow border border-gray-700">
      <table className="min-w-full table-auto text-sm text-left text-gray-300">
        <thead className="bg-gray-800 text-gray-100 uppercase tracking-wider text-xs">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Left Collocation</th>
            <th className="px-4 py-2">Keyword</th>
            <th className="px-4 py-2">Right Collocation</th>
            <th className="px-4 py-2">Frequency Left</th>
            <th className="px-4 py-2">Frequency Right</th>
          </tr>
        </thead>
        <tbody>
          {results.map((entry) => {
            const leftCollocation = cleanLeftCollocation(entry.unit1?.[0] || ""); 
            const rightCollocation = entry.unit2?.[1] || "";
            const frequencyLeft = entry.frequencyLeft || 0;
            const frequencyRight = entry.frequencyRight || 0;
            const excerpt = entry.excerpt || "";

            const [left1, keyword] = entry.unit1 || [];
            const [_, right2] = entry.unit2 || [];

            const highlightedExcerpt = highlightSearchTerm(excerpt, query);

            return (
              <tr key={entry.id} className="hover:bg-gray-800">
                <td className="px-4 py-2">{entry.id}</td>
                <td className="px-4 py-2">{leftCollocation}</td>
                <td className="px-4 py-2 font-medium text-cyan-300" dangerouslySetInnerHTML={{ __html: highlightedExcerpt }}></td>
                <td className="px-4 py-2">{rightCollocation}</td>
                <td className="px-4 py-2">{frequencyLeft}</td>
                <td className="px-4 py-2">{frequencyRight}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
