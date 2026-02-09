const tracks = [
  { id: 1, title: "Neon Horizon", album: "Solar Echoes", plays: "142,502,110", time: "3:45" },
  { id: 2, title: "Silent Echo", album: "Solar Echoes", plays: "98,211,405", time: "4:12" },
  { id: 3, title: "Aftermath", album: "The Void EP", plays: "82,400,123", time: "2:58" },
  { id: 4, title: "Midnight Pulse", album: "Neon Horizons", plays: "54,001,890", time: "3:21" },
];

const PopularTracks = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Popular</h2>

      <div className="space-y-1">
        {tracks.map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer"
          >
            <span className="w-6 text-slate-500">{t.id}</span>

            <div className="flex-1">
              <p className="font-bold">{t.title}</p>
              <p className="text-sm text-slate-400">{t.album}</p>
            </div>

            <span className="hidden md:block text-sm text-slate-500">
              {t.plays}
            </span>
            <span className="w-12 text-right text-sm text-slate-500">
              {t.time}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularTracks;
