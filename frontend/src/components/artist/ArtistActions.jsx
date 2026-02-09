const ArtistActions = () => {
  return (
    <div className="px-10 py-6 flex items-center gap-6 sticky top-0 bg-background-dark/80 backdrop-blur-md z-10 border-b border-white/5">
      <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-black hover:scale-105 transition">
        ▶
      </button>

      <button className="px-8 py-2.5 border-2 border-slate-700 rounded-full font-bold hover:border-primary hover:text-primary transition">
        FOLLOW
      </button>

      <button className="text-slate-400 hover:text-white text-3xl">
        ⋯
      </button>
    </div>
  );
};

export default ArtistActions;
