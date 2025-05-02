export default function Sidebar() {
    return (
      <aside className="w-64 h-screen fixed top-0 left-0 bg-blue-800 text-white shadow-lg z-50 hidden md:block">
        <div className="p-6 font-bold text-lg border-b border-blue-700">
          RUM Dashboard
        </div>
        <nav className="p-4 space-y-4 text-sm">
          <a href="#concordance" className="block hover:text-blue-300">Concordance Search</a>
          <a href="#latest" className="block hover:text-blue-300">Latest Corpus</a>
          <a href="#tools" className="block hover:text-blue-300">Corpus Tools</a>
        </nav>
      </aside>
    );
  }
  