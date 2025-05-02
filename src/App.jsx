import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sidebar for desktop */}
      <Sidebar />

      {/* Main content area shifted to right of sidebar */}
      <div className="md:ml-64">
        <Header />

        <main className="p-6 space-y-12">
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
    </div>
  );
}
