const moods = ["Party", "Chill", "Focus", "Workout", "Romantic"];

const MoodBar = ({ onSelect }) => {
  return (
    <div className="flex gap-3 overflow-x-auto py-4">
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => onSelect(mood.toLowerCase())}
          className="px-5 py-2 rounded-full bg-white/10 hover:bg-primary hover:text-black transition"
        >
          {mood}
        </button>
      ))}
    </div>
  );
};

export default MoodBar;
