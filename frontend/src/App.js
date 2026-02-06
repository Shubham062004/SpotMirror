import { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("happy");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = async () => {
    setLoading(true);
    const res = await fetch(
      `http://127.0.0.1:8000/recommend/mood?mood=${mood}&top=5`
    );
    const data = await res.json();
    setSongs(data);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🎵 SpotMirror</h1>

      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="calm">Calm</option>
        <option value="energetic">Energetic</option>
      </select>

      <button onClick={fetchRecommendations}>Get Recommendations</button>

      {loading && <p>Loading...</p>}

      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <strong>{song.track}</strong> — {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
