import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CorpusLoader from "./components/CorpusLoader";
import KWIC from "./components/KWIC";
import FrequencyChart from "./components/FrequencyChart";

export default function App() {
  const [query, setQuery] = useState("");
  const [corpus, setCorpus] = useState([]);

  return (
    <div className="flex bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 p-6 space-y-12">
        <CorpusLoader onLoad={setCorpus} />
        <Header />

        {/* Search Section */}
        <section id="concordance">
          <h2 className="text-2xl font-semibold mb-4 text-white">Concordance Search</h2>
          <SearchBar query={query} setQuery={setQuery} />
          {corpus.length > 0 && <KWIC corpus={corpus} query={query} />}
        </section>

        {/* Frequency Section */}
        <section id="frequency">
          <h2 className="text-2xl font-semibold mb-4 text-white">Top Word Frequencies</h2>
          {corpus.length > 0 && <FrequencyChart corpus={corpus} />}
        </section>

        {/* Tools Placeholder */}
        <section id="tools">
          <h2 className="text-2xl font-semibold mb-4 text-white">Corpus Tools</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Transcript viewer</li>
            <li>Modal tagging interface</li>
            <li>Video-text alignment explorer</li>
          </ul>
        </section>

        <footer className="text-sm text-gray-500 text-center py-10 mt-12 border-t border-gray-700">
          &copy; 2025 RUM Modal Particles Lab. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
