import { useState } from "react";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow py-6 mb-8">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight text-blue-700">
            RUM Multimodal Corpus Dashboard
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Explore, search, and interact with our multimodal linguistic data.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-12">
        <section id="concordance">
          <h2 className="text-2xl font-semibold mb-4">Concordance Search</h2>
          <SearchBar query={query} setQuery={setQuery} />
          {/* Future: SearchResults component here */}
        </section>

        <section id="latest">
          <h2 className="text-2xl font-semibold mb-4">Latest Corpus Materials</h2>
          <div className="bg-white border rounded-xl shadow p-6 text-gray-700">
            <p>Coming soon: embedded video, audio, and text snippets.</p>
          </div>
        </section>

        <section id="tools">
          <h2 className="text-2xl font-semibold mb-4">Corpus Tools</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Transcript viewer</li>
            <li>Modal tagging interface</li>
            <li>Video-text alignment explorer</li>
          </ul>
        </section>
      </main>

      <footer className="text-sm text-gray-500 text-center py-10 mt-12 border-t">
        &copy; 2025 RUM Modal Particles Lab. All rights reserved.
      </footer>
    </div>
  );
}
