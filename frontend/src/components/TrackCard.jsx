const TrackCard = ({ track, onPlay }) => {
  return (
    <div
      onClick={() => onPlay(track)}
      className="p-4 bg-white/10 rounded-lg hover:bg-white/20 cursor-pointer"
    >
      <p className="font-semibold">{track.title}</p>
      <p className="text-xs text-gray-400">{track.artist}</p>
    </div>
  );
};

export default TrackCard;
