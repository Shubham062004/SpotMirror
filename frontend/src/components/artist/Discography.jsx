const albums = [
  { title: "Solar Echoes", year: "2023 • Album" },
  { title: "The Void EP", year: "2022 • EP" },
  { title: "Iron City", year: "2021 • Album" },
  { title: "Retrograde", year: "2020 • Album" },
];

const Discography = () => {
  return (
    <section className="mt-12">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Discography</h2>
        <button className="text-sm text-slate-400 hover:text-white">
          Show all
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {albums.map((a) => (
          <div
            key={a.title}
            className="bg-surface-dark/40 p-4 rounded-xl border border-white/5 hover:bg-surface-dark transition cursor-pointer"
          >
            <div className="aspect-square bg-slate-800 rounded-lg mb-4" />
            <p className="font-bold truncate">{a.title}</p>
            <p className="text-sm text-slate-400">{a.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discography;
