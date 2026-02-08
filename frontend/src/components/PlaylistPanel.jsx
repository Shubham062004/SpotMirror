import TrackCard from "./TrackCard";

const PlaylistPanel = ({ playlist }) => {
  if (!playlist) return null;

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4">{playlist.playlist_name}</h2>

      <div className="grid grid-cols-5 gap-4">
        {playlist.tracks.map((track, idx) => (
          <TrackCard key={idx} track={track} onPlay={() => {}} />
        ))}
      </div>
    </section>
  );
};

export default PlaylistPanel;
