const mixes = [
  "Daily Mix",
  "Chill Vibes",
  "Rock Classics",
  "Electro Focus",
  "Acoustic Hits",
];

const TopMixGrid = () => {
  return (
    <section className="grid grid-cols-3 gap-4">
      {mixes.map((mix) => (
        <div
          key={mix}
          className="p-4 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer"
        >
          <p className="font-bold">{mix}</p>
        </div>
      ))}
    </section>
  );
};

export default TopMixGrid;
