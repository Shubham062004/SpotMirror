import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PlayerBar from "../components/PlayerBar";

import GreetingSection from "../components/home/GreetingSection";
import TopMixGrid from "../components/home/TopMixGrid";
import RecentlyPlayed from "../components/home/RecentlyPlayed";
import Recommendations from "../components/home/Recommendations";

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
    <div className="flex h-screen overflow-hidden bg-background-dark text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto px-8 pb-32 space-y-12">
          {/* Greeting */}
          <GreetingSection />

          {/* Mood-based Playlist */}
          <section>
            <h2 className="text-xl font-bold mb-4">
              Choose your mood
            </h2>
            <MoodBar onSelect={generatePlaylist} />

            {loading && (
              <p className="mt-3 text-sm text-slate-400">
                Generating playlist...
              </p>
            )}

            {playlist && (
              <div className="mt-6">
                <PlaylistPanel playlist={playlist} />
              </div>
            )}
          </section>

          {/* Existing Home Sections */}
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
