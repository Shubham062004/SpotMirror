const tracks = [
  "Midnight Rock",
  "Late Jazz",
  "Synth Waves",
  "Festival Anthems",
];

const RecentlyPlayed = () => {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold mb-4">Recently Played</h2>
      <div className="grid grid-cols-5 gap-4">
        {tracks.map((track) => (
          <div
            key={track}
            className="p-4 bg-white/10 rounded-lg hover:bg-white/20"
          >
            <p className="font-semibold">{track}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentlyPlayed;
