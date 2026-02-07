const moods = ["Party", "Chill", "Energize", "Focus", "Sad"];

export default function MoodBar() {
  return (
    <div className="flex gap-3 py-6">
      {moods.map((mood) => (
        <button
          key={mood}
          className="px-5 py-2 rounded-full bg-white/10 hover:bg-primary hover:text-black transition"
        >
          {mood}
        </button>
      ))}
    </div>
  );
}
