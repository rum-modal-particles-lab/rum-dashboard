export default function Sidebar() {
  return (
    <aside className="w-64 h-screen fixed top-0 left-0 bg-gradient-to-b from-gray-800 via-gray-950 to-gray-900 text-white shadow-xl z-50 hidden md:block rounded-r-lg">
      {/* Sidebar Header */}
      <div className="p-6 font-light text-xl border-b border-gray-800">
        RUM Dashboard
      </div>
      {/* Navigation Links */}
      <nav className="p-4 space-y-6 text-sm">
        <a
          href="#concordance"
          className="block text-lg font-light text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-105 relative"
        >
          Concordance Search
          {/* Gradient underline */}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 transform scale-x-0 hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
        </a>
        <a
          href="#frequency"
          className="block text-lg font-light text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-105 relative"
        >
          Word Frequencies
          {/* Gradient underline */}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 transform scale-x-0 hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
        </a>
        <a
          href="#tools"
          className="block text-lg font-light text-gray-300 hover:text-cyan-400 transition duration-300 transform hover:scale-105 relative"
        >
          Corpus Tools
          {/* Gradient underline */}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 transform scale-x-0 hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
        </a>
      </nav>
    </aside>
  );
}
