import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PlayerBar from "../components/PlayerBar";

import GreetingSection from "../components/home/GreetingSection";
import TopMixGrid from "../components/home/TopMixGrid";
import RecentlyPlayed from "../components/home/RecentlyPlayed";
import Recommendations from "../components/home/Recommendations";

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-white">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto px-8 pb-32 space-y-12">
          <GreetingSection />
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
