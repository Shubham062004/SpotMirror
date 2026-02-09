const recommendations = [
  "Artist Radio",
  "Deep House Mix",
  "Indie Essentials",
  "Relaxing Lo-Fi",
  "Synthpop 2088",
  "Night Walk",
];

const Recommendations = () => {
  return (
    <section>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">
          Based on your recent listening
        </h2>
        <button className="text-sm text-slate-400 hover:text-white">
          See All
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {recommendations.map((rec) => (
          <div
            key={rec}
            className="flex-none w-48 p-4 rounded-xl bg-card-dark/50 hover:bg-card-dark transition cursor-pointer"
          >
            <div className="aspect-square bg-slate-800 rounded mb-4" />

            <h3 className="font-bold text-sm truncate">{rec}</h3>
            <p className="text-xs text-slate-400">
              Personalized playlist
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
