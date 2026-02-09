const ArtistPick = () => {
  return (
    <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl">
      <p className="text-xs uppercase font-bold tracking-widest text-primary mb-2">
        Artist Pick
      </p>

      <div className="flex gap-4">
        <div className="w-20 h-20 bg-slate-800 rounded-lg" />
        <div>
          <p className="font-bold">Lumina Nova: Live in Tokyo</p>
          <p className="text-sm text-slate-400">Playlist • 40 songs</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistPick;
