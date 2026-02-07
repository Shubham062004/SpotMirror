const PlayerBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-20 bg-background-dark border-t border-white/5 flex items-center px-6">
      <div className="flex-1">🎵 Currently Playing</div>

      <div className="flex gap-4">
        <button>⏮</button>
        <button className="bg-primary text-black rounded-full px-4">▶</button>
        <button>⏭</button>
      </div>

      <div className="flex-1 text-right">🔊</div>
    </footer>
  );
};

export default PlayerBar;
