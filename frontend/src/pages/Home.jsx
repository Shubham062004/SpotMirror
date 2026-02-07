import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MoodBar from "../components/MoodBar";
import PlaylistGrid from "../components/PlaylistGrid";
import PlayerBar from "../components/PlayerBar";

export default function Home() {
  return (
    <div className="flex h-screen bg-background-dark text-white">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto px-8 pb-32">
          <MoodBar />
          <PlaylistGrid />
        </div>
      </main>

      <PlayerBar />
    </div>
  );
}
