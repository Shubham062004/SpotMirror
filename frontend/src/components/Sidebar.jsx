const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-background-dark border-r border-white/5 p-6">
      <h1 className="text-xl font-bold mb-6">SpotMirror</h1>

      <nav className="space-y-3">
        <button className="block w-full text-left px-3 py-2 rounded-full bg-primary/10 text-primary">
          Home
        </button>
        <button className="block w-full text-left px-3 py-2 rounded-full hover:bg-white/10">
          Search
        </button>
        <button className="block w-full text-left px-3 py-2 rounded-full hover:bg-white/10">
          Library
        </button>
      </nav>

      <div className="mt-8">
        <p className="text-xs uppercase text-gray-400 mb-2">Playlists</p>
        <ul className="space-y-1 text-sm">
          <li>Morning Jazz</li>
          <li>Late Night Lo-Fi</li>
          <li>Gym Motivation</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
