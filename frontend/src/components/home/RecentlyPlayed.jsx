const recent = [
  { title: "Dreamy Pop", artist: "Various Artists" },
  { title: "Midnight Rock", artist: "The Echoes" },
  { title: "Synth Waves", artist: "Neon Pulse" },
  { title: "Late Jazz", artist: "Smooth Quintet" },
  { title: "Festival Anthems", artist: "EDM United" },
  { title: "Unplugged Sessions", artist: "Acoustic Soul" },
];

const RecentlyPlayed = () => {
  return (
    <section>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Recently Played</h2>
        <button className="text-sm text-slate-400 hover:text-white">
          See All
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {recent.map((item) => (
          <div
            key={item.title}
            className="p-4 rounded-xl bg-card-dark/50 hover:bg-card-dark transition group cursor-pointer"
          >
            <div className="relative mb-4 aspect-square bg-slate-800 rounded" />

            <h3 className="font-bold text-sm truncate">{item.title}</h3>
            <p className="text-xs text-slate-400 truncate">
              {item.artist}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentlyPlayed;
