const mixes = [
  "Daily Mix 1",
  "Chill Vibes",
  "Rock Classics",
  "Electro Focus",
  "Podcast Weekly",
  "Acoustic Hits",
];

const TopMixGrid = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mixes.map((mix) => (
          <div
            key={mix}
            className="group flex items-center bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition cursor-pointer pr-4"
          >
            <div className="size-20 bg-card-dark flex-shrink-0" />

            <p className="font-bold px-4 flex-1 truncate">{mix}</p>

            <button className="size-12 rounded-full bg-primary text-black flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition">
              ▶
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopMixGrid;
