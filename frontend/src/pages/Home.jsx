import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TopMixGrid from "../components/TopMixGrid";
import RecentlyPlayed from "../components/RecentlyPlayed";
import Recommendations from "../components/Recommendations";
import PlayerBar from "../components/PlayerBar";

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 overflow-y-auto pb-24">
        <Header />

        <div className="px-8 py-6 space-y-10">
          <TopMixGrid />
          <RecentlyPlayed />
          <Recommendations />
        </div>
      </main>

      <PlayerBar />
    </div>
  );
};

export default Home;
