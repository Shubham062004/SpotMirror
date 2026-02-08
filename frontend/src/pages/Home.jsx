import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TopMixGrid from "../components/TopMixGrid";
import RecentlyPlayed from "../components/RecentlyPlayed";
import Recommendations from "../components/Recommendations";
import PlayerBar from "../components/PlayerBar";

import MoodBar from "../components/MoodBar";
import PlaylistPanel from "../components/PlaylistPanel";

const Home = () => {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(false);

  const generatePlaylist = async (mood) => {
    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:8000/api/playlist/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: "demo_user",
            seed_track: "Happy",
            mood,
            limit: 15,
          }),
        }
      );

      const data = await res.json();
      setPlaylist(data);
    } catch (error) {
      console.error("Failed to generate playlist:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-28">
        <Header />

        <div className="px-8 py-6 space-y-12">
          {/* Mood Selector */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              Choose your mood
            </h2>
            <MoodBar onSelect={generatePlaylist} />
          </section>

          {/* Generated Playlist */}
          {loading && (
            <p className="text-sm text-slate-400">
              Generating playlist...
            </p>
          )}

          <PlaylistPanel playlist={playlist} />

          {/* Existing Sections */}
          <TopMixGrid />
          <RecentlyPlayed />
          <Recommendations />
        </div>
      </main>

      {/* Player */}
      <PlayerBar />
    </div>
  );
};

export default Home;
