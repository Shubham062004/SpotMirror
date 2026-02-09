import Sidebar from "../components/Sidebar";
import PlayerBar from "../components/PlayerBar";

import ArtistHero from "../components/artist/ArtistHero";
import ArtistActions from "../components/artist/ArtistActions";
import PopularTracks from "../components/artist/PopularTracks";
import Discography from "../components/artist/Discography";
import ArtistAbout from "../components/artist/ArtistAbout";
import ArtistPick from "../components/artist/ArtistPick";

const Artist = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-slate-100">
      <Sidebar />

      <main className="flex-1 overflow-y-auto pb-32">
        <ArtistHero />
        <ArtistActions />

        <div className="px-10 grid grid-cols-12 gap-12 mt-8">
          <div className="col-span-12 xl:col-span-8">
            <PopularTracks />
            <Discography />
          </div>

          <div className="col-span-12 xl:col-span-4 flex flex-col gap-8">
            <ArtistAbout />
            <ArtistPick />
          </div>
        </div>
      </main>

      <PlayerBar />
    </div>
  );
};

export default Artist;